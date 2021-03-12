---
title: What is an Analysis?
---

Submitted data consists of data files (e.g. sequencing reads or VCFs), as well as any associated file metadata (data that describes your data).  When metadata and the data files are combined, it is referred to as a Song `Analysis`.  An analysis is a trackable unit of data that keeps metadata and a file associated together, and is the main entity in a Song database. 

Analysis types are described by Song administrators, who can model the data inside an analysis type by creating [Dyanmic Scheamas](documentation/song/user-guide/schema).  An analysis type can contain any variety  of information that needs to be recorded about a file type, define din `JSON` format. 

Song users mainly interact with Song by submitting data against an established analysis type schema, or by downloading files associated to an analysis in a bundle (e.g multiple files that are bundled together in one analysis).  
