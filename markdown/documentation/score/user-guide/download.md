---
title: Downloading Data
---

To download files from your configured object storage with the Score client, use the [`download` command](/documentation/score/user-guide/commands#download).

The command provides different methods to download files:

* `--analysis-id` option : Download files for a specific [Song](/documentation/song) analysis ID. 
* `--manifest` option: Download specific files based on a manifest file ID, manifest file URL, or path to the manifest file.
* `--object-id` option: Download a specific file object ID.
* `--program-id` option: Download files for a specific [Song](/documentation/song) program ID.
* `--study-id` option: Download files for a specific [Song](/documentation/song) study ID.

The command has additional options that can be used, see [here](/documentation/score/user-guide/commands#download) for details.

# Download Example

Here is an example of downloading files using a previously-generated manifest file from Song.

Switch to your home directory and from there, initiate a download by executing the Score client:

```shell
$ ./score-client-<latest-release-number>/bin/score-client download --manifest ./<manifestDirectory>/manifest.txt --output-dir ./<outputDirectory>
```
Where:

* `<manifestDirectory>` is the location of the previously-generated manifest file
* `<outputDirectory>` is the location where you want the files to be downloaded

If successful, each file in the manifest will be 100% downloaded, and the Score client will indicate the download has completed.