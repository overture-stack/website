---
title: Command Reference
---

# Invoking a Command

To invoke a command, run the `score-client` executable and append any options required after the command with the necessary input values.

For example, invoking the `upload` command and using the `--manifest` option to provide a manifest file:

```shell
$ ./score-client-<latest-release-number>/bin/score-client upload --manifest ./<directory>/manifest.txt
```

# Commands

The following sub-sections are a reference listing of all the commands and command options currently supported by the Score client.

## Download

This command retrieves file object(s) from the remote storage repository.

| Option | Description |
| -------| ------------|
| `--analysis-id` | Download files for a specific [Song](/documentation/song) analysis ID. |
| `--force` | Force a re-download of the file if it already exists locally (overrides local file). |
| `--index` | If available, also download the file index. |
| `--length` | Limit the number of bytes to download to this value.  By default, if this option is not specified, all of the file will be downloaded. |
| `--manifest` | Download files based on a manifest file ID, manifest file URL, or path to the manifest file. |
| `--object-id` | Download a specific file object ID. |
| `--offset` | Byte position in the source file to begin download from.  By default, if this option is not specified, all of the file will be downloaded. |
| `--output-dir` | Path to the output directory where files will be downloaded to. |
| `--output-layout` | Layout of the output directory, one of: |
| | * `bundle` : Saved according to the filename under the Song bundle ID directory. |
| | * `filename` : Saved according to the filename in the output directory. |
| | * `id` : Saved according to the object ID in the output directory. |
| `--program-id` | Download files for a specific [Song](/documentation/song) program ID. |
| `--study-id` | Download files for a specific [Song](/documentation/song) study ID. |
| `--validate` | If available, perform validation on file MD5 checksum. |
| `--verify-connection` | First verify the connection to the object storage repository. |

# Extra Options

Here is a list of additional option flags that can be used when the `score-client` executable itself:


| Option | Description | 
| -------| ------------| 
| --profile | Define a specific environment profile used to resolve configuration properties.  If not specified, the default profile is used. |
| --quiet | Run client in quiet mode, with a reduced, minimal set of info messages displayed during execution. |
| --silent | Run client in silent mode, without any additional info messages displayed during execution. |