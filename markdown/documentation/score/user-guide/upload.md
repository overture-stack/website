---
title: Uploading Data
---
# The Score-Client Upload Command

File uploads can be executed with the Score client's `upload` command.

The `upload` command offers various methods for uploading file data. The main methods are summarized below:

- `--file` option: Upload a particular file by specifying its path.
- `--manifest` option: Upload specific files using a manifest. This can be done by providing the manifest file ID, its URL, or the path to it.
- `--object-id` option: Upload a particular file by specifying its object ID.

Here are the different options available with the Score-Client `upload` command:

| Option | Description |
| -------| ------------|
| `--file` | Upload a particular file by specifying its path. |
| `--force` | Redownload the file if it already exists in the object storage, replacing the file in the repository. |
| `--manifest` | Upload specific files using a manifest by providing the manifest file ID, its URL, or the path to it. |
| `--md5` | MD5 checksum value of the file being uploaded. |
| `--object-id` | Upload a particular file by specifying its object ID. |
| `--validate` | If available, validate the file using its MD5 checksum. |
| `--verify-connection` | Initially, verify the connection to the object storage repository. |

# Upload Example

For complete information on uploading data, including generating a manifest, check out our guide on [data submission using Song and Score](/documentation/song/user/submit/). The following example outlines uploading files using a previously created manifest file from Song:

1. Execute the following command from your home directory:

```bash
docker exec score-client sh -c "score-client upload --manifest ./<directory>/manifest.txt"
```

Replace `<directory>` with the location of the previously generated manifest file.

2. If successful, the Score client will indicate that the upload is complete. You'll see an output similar to:

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
