---
title: Introduction
---

Score is a file transfer microservice designed as an intermediary between object storage and authorization systems. The primary purpose of Score is to securely upload and download objects to and from an object storage provider. It achieves secure access to file data by using authorized and time-limited [pre-signed URLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html).

It's important to note that Score focuses on data transfer and does not handle the complexities of metadata management. To address this, Score uses a companion application called [Song](/documentation/song). Song handles the validation and tracking of all the associated file metadata stored within a Song repository separate from file data storage. By working together, Score and Song provide a comprehensive solution for organizing distributed data. 

# Features

## High Performance Transfers

Score is a multipart transfer solution providing several key benefits:

- File downloads can be done in parts, being paused and resumed as required by the user

- File transfers will automatically resume if paused or interrupted mid-transfer (e.g., due to connection issues)

- Parallelization of these transfer operations makes the upload and download of files efficient and fast

## Data Integrity

- Score ensures the authenticity of file transfers by performing standardized [MD5 validations](https://www.ietf.org/rfc/rfc1321.txt) against all file uploads and downloads

## BAM & CRAM Slicing

- Integration of other [samtools](http://www.htslib.org/) functionalities in the Score client, such as the ability to view reads from a BAM file

- Ability to slice BAM and CRAM files by genomic regions using integrated command line tools

## The Score Client

The score-client is a command line tool we created to streamline interactions with Scores REST API endpoints. With the score client, you can upload files, download files and view various parameters related to Score. For more information on score-client commands, see our [score client reference documentation](./reference/commands.md).