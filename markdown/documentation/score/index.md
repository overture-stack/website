---
title: Introduction
---

Score facilitates the transfer and storage of your data seamlessly and flexibly for cloud-based projects.  This storage and transfer system helps you manage data upload and download with powerful features such as file bundling and resumable downloads.

Score uses the concept of pre-signed URLs (see Amazon S3 definition [here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html)) to manage data transfer to and from your cloud storage provider.  As such, Score can be thought of as a broker between an object storage system (such as Amazon S3) and the user authorization system, with the responsibility of validating user access and generating the pre-signed URLs required for object access.

Working together, Song and Score enable secure and distributed data management.
Score works with object-based storage including Amazon Web Services S3, Azure Storage,
and Openstack Ceph to enable file upload and download that can be parallelized into multiple
parts and easily resumed with high integrity for a fault-tolerant data transfer. Specific features to
support genomic data have been built into Song and Score: file bundling to match genomic files
with their index files, and slicing of a sequencing read file for a targeted region instead of
downloading the whole file.

# Features

## Support for Multiple Storage Providers

Score currently supports data transfer with several popular cloud-based storage providers:

* [Amazon S3](https://aws.amazon.com/s3/)
* [Microsoft Azure Storage](https://azure.microsoft.com/en-ca/services/storage/)
* [Openstack](https://www.openstack.org/) with [Ceph](https://ceph.io/)
* [Minio](https://min.io/)

## Multipart Uploads and Downloads

To enable high performance transfers, Scores supports multipart file uploads and downloads.  By implementing a multipart transfer solution, Score provides several key benefits:

* File downloads can be done in parts, being paused and resumed as required by the user
* File transfers will automatically resumed if paused or interrupted mid-transfer (e.g. due to connection issues)
* Parallelization of these transfer operations makes upload and download of files efficietn and fast

## Data Integrity

Score performs standard [MD5 validation](https://www.ietf.org/rfc/rfc1321.txt) against all file uploads and downloads to check for corrupted files and ensure data integrity.

## Applications to Genomics

Similar to other products in the [Overture](https://www.overture.bio/products/) software suite, Score has particularly useful applications in the field of Genomics, including the following features:

* Ability to slice BAM and CRAM files by genomic regions using integrated command line tools
* Integration of other samtools functionality in the Score client, such as ability to view reads from a BAM file

# Integrations

As a data transfer management system, Score is focused on managing data upload and download, and does not handle the complexities of file metadata validation. To handle this, Score is built to interact with a required companion application, [Song](/documentation/song).  Song is responsibe for validating file metadata, assigning unique global identifiers for data management, assigning permisssions for open (public) versus controlled (authentication required) file access, and so on.