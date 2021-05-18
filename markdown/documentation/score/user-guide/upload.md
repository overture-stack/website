---
title: Uploading Data
---

To upload files to your configured object storage with the Score client, use the [`upload` command](/documentation/score/user-guide/commands#upload).

The command provides different methods to upload files:

* `--file` option : Upload a specific file by providing the path to that file.
* `--manifest` option: Upload specific files using a manifest by providing the manifest file ID, manifest file URL, or path to the manifest file.  For example, using a manifest file generated from the [Song](/documentation/song) client.
* `--object-id` option: Upload a specific file by providing its object ID.

The command has additional options that can be used, see [here](/documentation/score/user-guide/commands#upload) for details.

# Upload Example

Here is an example of uploading files using a previously-generated manifest file from Song:

1. Switch to your home directory and from there, initiate an upload by executing the Score client:

```shell
$ ./score-client-<latest-release-number>/bin/score-client upload --manifest ./<directory>/manifest.txt
```
Where `<directory>` is the location of the previously-generated manifest file.

2. If successful, each file in the manifest will be 100% uploaded, and the Score client will indicate the upload has completed:

```shell
Uploading object: '/home/ubuntu/songdata/input-files/example.vcf.gz.idx' using the object id e98daf88-fdf8-5a89-9803-9ebafb41de94
100% [##################################################]  Parts: 1/1, Checksum: 100%, Write/sec: 1000B/s, Read/sec: 0B/s
Finalizing...
Total execution time:         3.141 s
Total bytes read    :               0
Total bytes written :              24
Upload completed
Uploading object: '/home/ubuntu/songdata/input-files/example.vcf.gz' using the object id 440f4559-e905-55ec-bdeb-9518f823e287
100% [##################################################]  Parts: 1/1, Checksum: 100%, Write/sec: 7.8K/s, Read/sec: 0B/s
Finalizing...
Total execution time:         3.105 s
Total bytes read    :               0
Total bytes written :              52
Upload completed
```