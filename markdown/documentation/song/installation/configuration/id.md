---
title: ID Management
---

# ID Management modes

Song offers two distinct modes for managing primary keys across Donors, Specimens, Samples, and Files:

1. **Local Mode (`LOCAL`)**: This mode indicates that Song will handle ID management internally, storing identifiers within its own system. It ensures thread safety and maintains consistency through internal memory.
2. **Federated Mode (`FEDERATED`)**: In this mode, Song relies on an external service for ID management. Authorization can be achieved through dynamic JWT tokens or predefined static keys.

<Warning> It is crucial to note that you cannot combine these two modes of ID management. If you choose to use one, it must apply to all IDs; either all are managed locally by Song or all are handled externally by a third-party service. </Warning>

# Environment Variable Setup

## Local ID Management

To configure Song to generate and manage all primary keys in UUID format using its internal system, you need to enable the local mode.

To do this, set the environment variable `ID_USELOCAL` to `true` in your `.env.song` file:

```ENV
ID_USELOCAL=true
```

<Note title="Developers Note"> All IDs, except for analysisId, are stateless and are computed using UUID5 hash. AnalysisID's are stateful to guarantee uniqueness. `LocalIdService` doesn't have to save/register an analysisId directly since `AnalysisService.create` method handles that. </Note>

## External ID Management

When using external ID management, Song communicates with an external ID database for each entity type. If the data submission contains entity IDs not validated by this external database, Song will decline the submission. Once an ID is verified, it's stored within the Song database.

There are two types of external ID management supported by Song:

- **FEDERATED_DYNAMIC_AUTH**: This approach involves using an external ID service that dynamically generates and manages authorization tokens. Dynamic tokens are often implemented as JSON Web Tokens (JWTs), which can carry claims and expire after a certain time frame. This method provides flexibility and security because tokens can be revoked or refreshed as needed.

- **FEDERATED_STATIC_AUTH**: In contrast, this method utilizes an external ID service that employs statically defined tokens for authorization. Static tokens are typically predefined and do not change over time. They are often used for services that require long-term access without the need for frequent token rotation. However, they may pose a higher security risk if compromised, as they remain valid until manually revoked or replaced.

Choosing between dynamic and static authentication depends on the specific requirements of your system. Dynamic authentication is generally considered more secure and flexible, especially for applications that require frequent access control changes. On the other hand, static authentication may be simpler to implement and manage, making it suitable for systems with less frequent access control needs.

Here's a template of the `.env.song` configuration followed by a detailed description of the various URI parameters included:

```bash
# Set to false designates the usage of an external ID service
ID_USELOCAL=false

# URIs for the different entity types that map to their respective templates in the external ID service
# All the urls below MUST be defined. If a required urlTemplateVariable (such as studyId and submitterId) is not defined, an error occurs.
ID_FEDERATED_URITEMPLATE_DONOR=https://id.server.org/donor/id?projectCode={studyId}&donorSubmittedId={submitterId}&create=true
ID_FEDERATED_URITEMPLATE_SPECIMEN=https://id.server.org/specimen/id?projectCode={studyId}&specimenSubmittedId={submitterId}&create=true
ID_FEDERATED_URITEMPLATE_SAMPLE=https://id.server.org/sample/id?projectCode={studyId}&sampleSubmittedId={submitterId}&create=true
ID_FEDERATED_URITEMPLATE_FILE=https://id.server.org/file/id?bundleId={analysisId}&fname={fileName}

# Since analysisIds cannot be reused, special care must be taken to ensure SONG does not attempt to create an analysis with an id already on the id server.
# To enforce this, the following URL templates for authorized GET requests are needed.
ID_FEDERATED_URITEMPLATE_ANALYSIS_EXISTENCE=https://id.server.org/analysis/id?submittedAnalysisId={analysisId}&create=false
ID_FEDERATED_URITEMPLATE_ANALYSIS_GENERATE=https://id.server.org/analysis/id/generate
ID_FEDERATED_URITEMPLATE_ANALYSIS_SAVE=https://id.server.org/analysis/id?submittedAnalysisId={submitterId}&create=true

# Configuration for authentication with the external ID service.
ID_FEDERATED_AUTH_URL=https://auth.server.org
# If auth.bearer.token is defined, then FEDERATED_STATIC_AUTH mode is used.
ID_FEDERATED_AUTH_BEARER_TOKEN=
# If auth.bearer.credentials.* are all defined, and auth.bearer.token is not, FEDERATED_DYNAMIC_AUTH mode is used.
ID_FEDERATED_AUTH_BEARER_CREDENTIALS_CLIENTID=authClientID
ID_FEDERATED_AUTH_BEARER_CREDENTIALS_CLIENTSECRET=authClientSecret
```

### URI Parameters

If you choose to use externally managed ID's, you **must** provide Song with the expected ID according to the specifications below.

- External ID servers **must** implement GET controllers for the configured URI templates.
- At boot-time, Song validates the URI templates to ensure necessary template variables are present.
- External ID servers should support one of these authorization schemes: `FEDERATED_STATIC_AUTH` (static access token) or `FEDERATED_DYNAMIC_AUTH` (dynamically managed JWT).

<details>
  <summary><b>Click here for a detailed breakdown of the required template variables with examples</b></summary>
<br></br>

| Entity ID Type | Description | URI Template Config Property | Required Variables | Examples | Request Type | Response Type |
| --| -- | -- | --| --| -- | -- |
| donor              | Id Service returns a donorId that maps to the submitterId and studyId.                                  | ID_FEDERATED_URITEMPLATE_DONOR              | studyId, submitterId | `https://id.server.example.org/donor/id?sid={submitterId}&projectcode={studyId}`    | `GET`        | plaintext     |
| specimen           | ID Service returns a specimenId that maps to the submitterId and studyId.                               | ID_FEDERATED_URITEMPLATE_SPECIMEN           | studyId, submitterId | `https://id.server.example.org/specimen/id?sid={submitterId}&projectcode={studyId}` | `GET`        | plaintext     |
| sample             | ID Service returns a sampleId that maps to the submitterId and studyId.                                 | ID_FEDERATED_URITEMPLATE_SAMPLE             | studyId, submitterId | `https://id.server.example.org/sample/id?sid={submitterId}&projectcode={studyId}`   | `GET`        | plaintext     |
| file               | ID Service returns a fileId that maps to the analysisId and fileName.                                   | ID_FEDERATED_URITEMPLATE_FILE               | analysisId, fileName | `https://id.server.example.org/file/id?anid={analysisId}&fname={fileName}`          | `GET`        | plaintext     |
| analysis.existence | ID Service returns a boolean indicating the existence of the analysisId.                                | ID_FEDERATED_URITEMPLATE_ANALYSIS_EXISTENCE | analysisId           | `https://id.server.example.org/analysis/{analysisId}`                               | `GET`        | plaintext     |
| analysis.generate  | ID Service returns a generated candidate analysisId without persisting it. Does not require any inputs. | ID_FEDERATED_URITEMPLATE_ANALYSIS_GENERATE  | --                   | `https://id.server.example.org/analysis/generate`                                   | `GET`        | plaintext     |
| analysis.save      | ID Service persists the input analysisId and does not return anything.                                  | ID_FEDERATED_URITEMPLATE_ANALYSIS_SAVE      | analysisId           | `https://id.server.example.org/analysis/{analysisId}`                               | `GET`        | --            |

---
</details>
<br></br>

<Note title="URI Templates"> A URI template is a URI-like string that contains variables enclosed by braces. These can be expanded to produce an actual URI. Since the `IdService` method requires specific arguments for each entity ID retrieval method, URI Templates allow custom mapping of these arguments. Song will require specific template variables in each entity URI Template string. </Note>

## ICGC ARGO Example

The <a href="https://platform.icgc-argo.org/" target="_blank" rel="noopener noreferrer">ICGC ARGO Data Platform</a> is an international initiative with several distributed processing centres. This required the use of a central ID Service. An example of a URI donor request used by this system is as follows:

`https://clinical.platform.icgc-argo.org/clinical/donors/id?programId=PACA-CA&submitterId=PCSI_0591`

In the provided URI, a researcher requests the centralized ID service to retrieve the unique identifier for a **donor** associated with the programId **PACA-CA** and the submitterID **PCSI_0591**.

### 200 Response:

```shell
DO224719
```

### 404 Response:

```json
{
  "error": "Error",
  "message": "Donor not found"
}
```
