---
title:  ID Management
---

It is acknowledged that data often originates in other systems like research databases, LIMS systems etc.  Song has three modes of primary key management for the most important entities (Donors, Specimens, Samples, Files): 
- **LOCAL:** Represents a local-to-Song ID Management that persists to internal memory and is thread safe.
- **FEDERATED_DYNAMIC_AUTH:** Represents the usage of external ID service that uses dynamically managed authorization tokens (e.g. JWTs).
- **FEDERATED_STATIC_AUTH:** Represents the usage of external ID service that uses statically defined tokens for authorization.

Note: You cannot mix and match local/external ID management.  Either all IDs are locally managed by Song, or all IDs are managed by external services. 

# Local ID Management 
As you submit data, Song will create and manage all primary keys for users in UUID format. When `local` is enabled, all federated ID generation is disabled.   To enable local ID management: 
- Set your configuration to `useLocal: true`
- All IDs, except for analysisId, are stateless and are computed using UUID5 hash. 
- As the only exception, AnalysisID's are stateful, in order to guarantee uniqueness. The `LocalIdService` does not have to save/register an analysisId directly since `AnalysisService.create` method will take care of that. 

# Local ID Configuration Example 
Using the configurations file at `song-server-[version]/conf/application.yml`, set the correct values. 

```yaml
id:
    useLocal: true
```

# External ID Management 

As data is submitted, Song will refer to an `external` ID database for each entity type. If data is submitted and the entity IDs are not validated by the external database, Song will reject the data submission.  Once an ID has been validated, it will be stored in the Song database.  As an optimization, Song caches IDs it has verified.  If the ID is changed in an external database, this will need to be updated in Song. To enable external ID management: 
- Set your configuration to `useLocal: false`
- Set the configuration URI for each entity. A URI for each entity (`donor`, `specimen`, `sample`, `file`) **MUST** be defined during configuration.  

## External ID Server Requirements
If you choose to use externally managed ID's, you **must** provide Song with the expected ID according to the specification below. 
- The external ID servers **must** implement GET controllers for the configured URI templates.  
- At boot-time, SONG will validate the configured URI templates to ensure the required URI template variables are used.
- All external ID servers should support one of the following authorization schemes:  `FEDERATED_STATIC_AUTH` mode (static access token) based or `FEDERATED_DYNAMIC_AUTH` mode (dynamically managed JWT).

A URI template is a URI-like string that contains variables enclosed by braces `{}` which can be expanded to produce an actual URI. Since the  `IdService` method requires specific arguments for each entity ID retrieval method, URI Templates can be used to allow a custom mapping of these arguments. Song will require particular template variables to be used in each entity URI Template string. The following table describes the required template variables with some provided examples.

<!--Table start -->
| Entity ID Type | Description | URI Template Config Property | URI Template Required Variables | Examples | URI Request Type | URI Response Type |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| donor | Id Service returns a donorId that maps to the submitterId and studyId. | id.federated.uriTemplate.donor | studyId, submitterId | `https://id.server.example.org/donor/id?sid={submitterId}&projectcode={studyId}` | `GET` | plaintext |
| specimen | ID Service returns a specimenId that maps to the submitterId and studyId. | id.federated.uriTemplate.specimen | studyId, submitterId | `https://id.server.example.org/specimen/id?sid={submitterId}&projectcode={studyId}` | `GET` | plaintext |
| sample | ID Service returns a sampleId that maps to the submitterId and studyId. | id.federated.uriTemplate.sample | studyId, submitterId | `https://id.server.example.org/sample/id?sid={submitterId}&projectcode={studyId}` | `GET` | plaintext |
| file | ID Service returns a fileId that maps to the analysisId and fileName. | id.federated.uriTemplate.file | analysisId, fileName | `https://id.server.example.org/file/id?anid={analysisId}&fname={fileName}` | `GET` | plaintext |
| analysis.existence | ID Service returns a boolean indicating the existence of the analysisId . | id.federated.uriTemplate.analysis.existence | analysisId | `https://id.server.example.org/analysis/{analysisId}` | `GET` | plaintext |
| analysis.generate | ID Service returns a generated candidate analysisId without persisting it. Does not require any inputs. | id.federated.uriTemplate.analysis.generate | -- | `https://id.server.example.org/analysis/generate` | `GET` | plaintext |
| analysis.save | ID Service persists the input analysisId and does not return anything. | id.federated.uriTemplate.analysis.save | analysisId | `https://id.server.example.org/analysis/{analysisId}` | `GET` | -- |
<!--Table end -->

For example, the [ICGC ARGO Data Platform](https://platform.icgc-argo.org/) is a international initiative with several distributed processing centres, which required the use of a central ID Service.  An example of a URI donor request used by this system is as follows: https://clinical.platform.icgc-argo.org/clinical/donors/id?programId=PACA-CA&submitterId=PCSI_0591

200 Response: 
```
DO224719
```
404 Response:
```json
{
  "error": "Error",
  "message": "Donor not found"
}
```

# External ID Configuration Example 
Using the configurations file at `song-server-[version]/conf/application.yml`, set the correct values. An example of a fully configured ID management is provided here:

```yaml
id:
    useLocal: false
    federated:
        # All the urls below MUST be defined. If a required urlTemplateVariable (such as studyId and submitterId) is not defined in the urlTemplate, an error occurs
        uriTemplate:
            donor: https://id.server.org/donor/id?projectCode={studyId}&donorSubmittedId={submitterId}&create=true
            specimen: https://id.server.org/specimen/id?projectCode={studyId}&specimenSubmittedId={submitterId}&create=true
            sample: https://id.server.org/sample/id?projectCode={studyId}&sampleSubmittedId={submitterId}&create=true
            file: https://id.server.org/file/id?bundleId={analysisId}&fname={fileName}
             
            # Since analysisIds cannot be reused, special care must be taken to ensure SONG does not attempt to create an analysis with an id that already exists on the id server.
            # To enforce this, the following url templates for authorized GET requests are needed  
            analysis:
                existence: https://id.server.org/analysis/id?submittedAnalysisId={analysisId}&create=false 
                generate: https://id.server.org/analysis/id/generate
                save: https://id.server.org/analysis/id?submittedAnalysisId={submitterId}&create=true      
         
        # If auth.bearer.token defined, then uses FEDERATED_STATIC_AUTH mode.
        # If auth.bearer.credentials.* are all defined, and auth.bearer.token is not,
        #  then uses FEDERATED_DYNAMIC_AUTH
        auth:
            url: https://auth.server.org
            bearer:
                token: 
                credentials:
                    clientId: authClientID
                    clientSecret: authClientSecret

```