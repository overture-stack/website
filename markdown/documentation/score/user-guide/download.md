---
title: Downloading Data
---

# The Score-Client Download Command

File downloads can be run using the Score clients `download` command. 

The `download` command provides various methods for downloading file data. The primary methods are summarized below:

* `--analysis-id`: Downloads files for a specific [Song](/documentation/song) analysis ID. 
* `--manifest`: Downloads specific files based on a manifest file ID, manifest file URL, or path to the manifest file.
* `--object-id`: Downloads a specific file object ID.
* `--program-id`: Downloads files for a specific [Song](/documentation/song) program ID.
* `--study-id`: Downloads files for a specific [Song](/documentation/song) study ID.

The following table outlines all the different options available when using the Score-Client `download` command:

| Option | Description |
| -------| ------------|
| `--analysis-id` | Download files for a specific [Song](/documentation/song) analysis ID. |
| `--force` | Force a re-download of the file if it already exists locally (overrides local file). |
| `--index` | If available, also download the file index. |
| `--length` | Limit the number of bytes to download to this value.  By default, if this option is not specified, all of the file will be downloaded. |
| `--manifest` | Download specific files based on a manifest file ID, manifest file URL, or path to the manifest file. |
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

# Download Example

Here is an example of downloading files using a previously-generated manifest file from Song.

From your home directory use the following command:

```shell
$ ./score-client-<latest-release-number>/bin/score-client download --manifest ./<manifestDirectory>/manifest.txt --output-dir ./<outputDirectory>
```

-  `<manifestDirectory>` is the location of the previously-generated manifest file
- `<outputDirectory>` is the location where you want the files to be downloaded

<Note title="What is a Manifest?">For more information on key terms within Overtures data sumbission workflow check out the following guide on [data submission using Song and Score.](/documentation/song/user/submit/)</Note>


If successful the Score client will indicate the upload has completed.
