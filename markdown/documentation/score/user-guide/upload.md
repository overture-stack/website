---
title: Uploading Data
---

File uploads can be run using the Score clients `upload` command. 

The `upload` command provides various methods for uploading file data. The primary methods are summarized below:

* `--file` option : Upload a specific file by providing the path to that file.
* `--manifest` option: Upload specific files using a manifest by providing the manifest file ID, manifest file URL, or path to the manifest file.  For example, using a manifest file generated from the [Song](/documentation/song) client.
* `--object-id` option: Upload a specific file by providing its object ID.

The following table outlines all the different options available when using the Score-Client `upload` command:

| Option | Description |
| -------| ------------|
| `--file` | Upload a specific file by providing the path to that file. |
| `--force` | Force a re-upload of the file if it already exists in the object storage (overrides file in the repository). |
| `--manifest` | Upload specific files using a manifest by providing the manifest file ID, manifest file URL, or path to the manifest file. |
| `--md5` | MD5 checksum value of the file to upload. |
| `--object-id` | Upload a specific file by providing its object ID. |
| `--validate` | If available, perform validation on file MD5 checksum. |
| `--verify-connection` | First verify the connection to the object storage repository. |

# Upload Example

Here is an example of uploading files using a previously-generated manifest file from Song. 

1. From your home directory use the following command:

```shell
$ ./score-client-<latest-release-number>/bin/score-client upload --manifest ./<directory>/manifest.txt
```
Where `<directory>` is the location of the previously-generated manifest file.

<Note title="What is a Manifest?">For more information on key terms within Overtures data sumbission workflow check out the following guide on [data submission using Song and Score.](/documentation/song/user/submit/)</Note>

2. If successful the Score client will indicate the upload has completed:

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
