---
title: Downloading Data
---
# The Score-Client Download Command

File downloads can be run using the Score Client's `download` command.

The `download` command offers various methods for downloading file data. The main methods are as follows:

- `--analysis-id`: Downloads files for a specific <a href="/documentation/song" target="_blank" rel="noopener noreferrer">Song</a> analysis ID. 
- `--manifest`: Downloads specific files based on a manifest file ID, manifest file URL, or path to the manifest file.
- `--object-id`: Downloads a specific file object ID.
- `--program-id`: Downloads files for a specific <a href="/documentation/song" target="_blank" rel="noopener noreferrer">Song</a> program ID.
- `--study-id`: Downloads files for a specific <a href="/documentation/song" target="_blank" rel="noopener noreferrer">Song</a> study ID.

The table below details the options available when using the Score-Client `download` command:

| Option | Description |
| -------| ------------|
| `--analysis-id` | Download files for a specific <a href="/documentation/song" target="_blank" rel="noopener noreferrer">Song</a> analysis ID. |
| `--force` | Re-download the file if it already exists locally (overrides local file). |
| `--index` | If available, also download the file index. |
| `--length` | Restrict the download size to this number of bytes. By default, the whole file is downloaded unless this option is specified. |
| `--manifest` | Download specific files based on a manifest file ID, URL, or its path. |
| `--object-id` | Download a specific file object ID. |
| `--offset` | Byte position in the source file from where the download begins. By default, the whole file is downloaded unless this option is specified. |
| `--output-dir` | Path to the output directory where files will be downloaded to. |
| `--output-layout` | Layout of the output directory, one of: |
| | * `bundle` : Saved according to the filename under the Song bundle ID directory. |
| | * `filename` : Saved according to the filename in the output directory. |
| | * `id` : Saved according to the object ID in the output directory. |
| `--program-id` | Download files for a specific <a href="/documentation/song" target="_blank" rel="noopener noreferrer">Song</a> program ID. |
| `--study-id` | Download files for a specific <a href="/documentation/song" target="_blank" rel="noopener noreferrer">Song</a> study ID. |
| `--validate` | If available, validate the file using the MD5 checksum. |
| `--verify-connection` | First verify the connection to the object storage repository. |

# Download Example

Here is an example of downloading files using a previously generated manifest file from Song.

Execute the following command from your home directory:

```shell
./score-client-<latest-release-number>/bin/score-client download --manifest ./<manifestDirectory>/manifest.txt --output-dir ./<outputDirectory>
```

-  `<manifestDirectory>` represents the location of the earlier generated manifest file
- `<outputDirectory>` specifies where you intend to download the files

<Note title="What is a Manifest?"> To understand more about key terms in Overture's data submission workflow, check this guide on [data submission using Song and Score](/documentation/song/user/submit/).</Note>

If successful the Score Client will indicate the upload has completed.
