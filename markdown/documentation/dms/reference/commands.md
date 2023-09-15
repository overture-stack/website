---
title: Command Reference
---

This reference table lists all the commands and their options currently supported by the DMS installer.

All commands are executed by prefixing them with `dms`. For example: 
- `dms -h`
- `dms config build`
- `dms cluster start`

| Command         | Short Form | Description                                                                                                     | Options                                                      |
|-----------------|------------|-----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| `--help`        | `-h`       | Display the command reference and links to useful documentation.                                                | None                                                         |
| `--version`     | `-V`       | Show the current DMS version.                                                                                   | None                                                         |
| `config build`  | `co bu`    | Run the interactive configuration questionnaire.                                                                | None                                                         |
| `config get`    | `co g`     | Show the contents of the saved configuration file (`~/.dms/config.yaml`).                                       | None                                                         |
| `cluster start` | `cl start` | Deploy the configuration in the `~/.dms/config.yaml` file to a single cluster.                                  | None                                                         |
| `cluster stop`  | `cl stop`  | Stop the running cluster and all services deployed to it, **without** deleting the data volumes.                 | None                                                         |
| `cluster destroy`| `co destroy`| Destroy the cluster, its services, and **ALL** data volumes. Confirm before executing unless `-f` is supplied.  | `-f` - Force destroy volumes without confirmation.          |
