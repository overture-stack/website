---
title: Command Reference
---

To invoke a command, run the `song-client` executable and append any options required after the command with the necessary input values.

For information on the available commands use the following:

```shell
song-client-5.0.2/bin/sing --help
```

The following sub-sections is provided as a reference to all the commands and command options currently supported by the Song client.

## Config

The `config` command shows the current configuration settings.

## Submit

The `submit` command is used to submit a payload to create an analysis. For more information  see our [documentation on submitting data with Song](/documentation/song/user/submit/)

## Ping

The `ping` command can be used to ping (test) the Song server

## Get-Analysis-Type

<!--Please Elaborate-->

The `get-analysis-types` command is used to retrieve schema information based on some basic input parameters:

| Option | Description |
|--|--|
|-n, --name| name of a registered analysis schema|
|`-u`, `--unrendered-only`| Triggers the same behaviour as the unrendered flag in the API |
|`-v`, `--version`||

## List-Analysis-Types

<!--Please Elaborate-->

The `list-analysis-types` command is used to

| Option | Description |
|--|--|
|`-hs`, `--hide-schema`|Hide the schema. Default is false|
|`-l`, `--limit`|Query limit|
|`-n`, `--names`|Filter analysisTypes by names|
|`-o`, `--offset`|Query offset|
|`-sd`, `--sort-direction`|Sorting direction. Default is DESC, possible values are DESC or ASC|
|`-so`, `--sort-order`|AnalysisType fields to sort on|
|`-u`, `--unrendered-only`|Only retrieve the unrenedered schema that was initially registered. Default is false|
|`-v`, `--versions`|Filter analysisTypes by versions|

## Register-Analysis-Type

<!--Please Confirme-->

The `register-analysis-type` command is used to register and new analysis type

| Option | Description |
|--|--|
|`-f`,`--file`| Supply the file path for the new analysis type |

## Search

The `search` command is used to search for analysis objects based off various input parameters. Unless specified by one of the following options the `search` command will search for analysis within the current studyId.

| Option | Description |
|--|--|
|`-a`, `--analysis-id`|Search by a given analysisId|
|`-d`, `--donor-id`|Search by a given donorId|
|`-f`, `--file-id`|Search by a given fileId|
|`-sa`, `--sample-id`|Search by a given sampleId|
|`-sp`, `--specimen-id`|Search by a given specimenId|


## Manifest

The `manifest` command is used to generate a manifest file for an analysis with an associated analysisId. For more information  see our [documentation on submitting data with Song](/documentation/song/user/submit/)

| Option | Description |
|--|--|
|`-a`, `--analysis-id`| Associated analysisId |
|`-f`, `--file`| Name and directory for outputted manifest file |
|`-d`, `---input-dir`| Directory containing the files used for upload |


## Publish

The `publish` command is used to publish an analysis based on it's analysis Id. For more information see our [documentation on analysis managment with Song](/documentation/song/admin/analysismanagement/)

| Option | Description |
|--|--|
|`-a`, `--analysis-id`| Associated analysisId |
|`-i`, `--ignore-undefined-md5`|  |

## Unpublish

The `unpublish` command is used to mark data as unavailable to downstream services. For more information see our [documentation on analysis managment with Song](/documentation/song/admin/analysismanagement/)

| Option | Description |
|--|--|
|`-a`, `--analysis-id`| Associated analysisId |

## Suppress

The `suppress` command is used to block data from being accessed. For more information see our [documentation on analysis managment with Song](/documentation/song/admin/analysismanagement/)

| Option | Description |
|--|--|
|`-a`, `--analysis-id`| Associated analysisId |

## Export

<!--confirm-->

The `export` command is used to export a payload based on a variety of input parameters:

| Option | Description |
|--|--|
|`-a`, `--analysis-id`| Export payloads under a specified analysisId |
|`-f`, `--inputFile`|Path of input file containing a single column of analysisIds on each new line|
|`-o`, `--output-dir`|Directory to save the export to|
|`-s`, `--studyId`| Export payloads under a specified studyId|
|`-t`, `--threads`| |

## Update-File

<!--Please elaborate-->

The `update-file` command is used to update file data.

| Option | Description |
|--|--|
|`-a`, `--access`| Options: [open, controlled], Possible Values: [open, controlled] |
|`-d`, `--datatype`| |
|`-i`, `--info`||
|`-m`, `--md5`| |
|`--object-id`| |
|`-s`, `--size`| |
