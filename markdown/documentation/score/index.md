---
title: Introduction
---

The primary purpose of Score is to securely upload and download file data to and from an object storage provider. To ensure secure access to file data within object storage, Score utilizes time-limited <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html" target="_blank" rel="noopener noreferrer">pre-signed URLs</a>. 

Score specializes in data transfer, leaving metadata complexities to its companion application, <a href="/documentation/song" target="_blank" rel="noopener noreferrer">Song</a>, which handles the validation and tracking of metadata in its own repository, separate from object storage concerns. Together, Score and Song streamline distributed data organization.

# High Performance Transfers

Score offers a multipart transfer solution with several key advantages:

- File downloads can be segmented, allowing users to pause and resume as needed
- File transfers will automatically resume if paused or interrupted mid-transfer (e.g., due to connection issues)
- Parallelizing transfer operations ensures efficient and rapid file uploads and downloads

# Data Integrity

- Score ensures the authenticity of file transfers by performing standardized <a href="https://www.ietf.org/rfc/rfc1321.txt" target="_blank" rel="noopener noreferrer">MD5 validations</a> against all file uploads and downloads

# BAM & CRAM Slicing

- Integration of additional <a href="http://www.htslib.org/" target="_blank" rel="noopener noreferrer">samtools</a> features in the Score client, including the capability to view reads from a BAM file
- Ability to slice BAM and CRAM files by genomic regions using integrated command line tools

# The Score Client

The Score-Client is a command-line tool developed to streamline interactions with Score's REST API endpoints. With the score client, you can upload files, download files, and view various parameters related to Score. For more information on Score-Client commands, see our <a href="./reference/commands.md" target="_blank" rel="noopener noreferrer">score client reference documentation</a>.
