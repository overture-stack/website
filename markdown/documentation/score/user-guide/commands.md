---
title: Command Reference
---

Here is a reference table listing all the commands and command options currently supported by the Score client.

| Command          | Short Form | Description | Options |
| -----------------| ------------| -----------| --------|
| ??? | ??? | ??? | ??? |


| Command          | Short Form | Description | Options |
| -----------------| ------------| -----------| --------|
| --help   | -h | Displays the command reference and links to useful documentation. | None |
| --version   | -V | Displays the current DMS version. | None |
| config build | co bu | Runs the interactive configuration questionnaire. | None |
| config get | co g| Displays the contents of the saved configuration file (`~/.dms/config.yaml`) | None |
| cluster start | cl start | Deploys the configuration in the `~/.dms/config.yaml` file to a single cluster. | None |
| cluster stop | cl stop | Stops the running cluster and all services deployed to it, **without** deleting the data volumes. | None |
| cluster destroy | co destroy | Destroys the cluster, all services deploy to it, and **ALL** the data volumes. Always asks for confirmation before executing, unless the `-f` option is supplied. | `-f` - Forcefully destroys volumes without asking for confirmation. |