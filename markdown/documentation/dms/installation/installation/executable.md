---
title: Install the DMS Executable
---

The final installation step is to actually download and install the DMS executable.

# Required Steps

1. Log into your environment and open the command-line terminal.


2. Download the latest version of the DMS installer executable:

```shell
curl https://raw.githubusercontent.com/overture-stack/dms/<x.y.z>/src/main/bin/dms-docker > dms
```

3. Make the file executable:

```shell
chmod +x dms
```

4. Make the file usable from anywhere in your system:

```shell
sudo mv dms /usr/local/bin/
```

5. Test that the executable works.  This step serves two purposes: (1) To verify that the executable runs correctly and is not corrupted, and (2) To automatically generate the default **_~/.dms_** directory which is used to store some default configuration files.  Type this command:

```shell
dms -h
```

This command simply lists the help menu for the DMS installer.  If successful, the commands are listed:

```shell
dms -h

    ____     __  ___   _____
   / __ \   /  |/  /  / ___/
  / / / /  / /|_/ /   \__ \
 / /_/ /  / /  / /   ___/ /
/_____/  /_/  /_/   /____/

Usage: dms [-hV] [COMMAND]
DMS command
  -h, --help      Show this help message and exit.
  -V, --version   Print version information and exit.
Commands:
  config, co
    build, bu    Interactively build a configuration
    get, g       Get the current configuration
    version, v   Display the configuration version
  cluster, cl
    apply        Deploy a configuration to the cluster
    destroy      Destroy the cluster
  bash-completion
                 Dump the bash-completion script
```

6. Check that the **_~/.dms_** directory was created by trying to switch to it:

```shell
ubuntu@sample-dms:~$ cd ~/.dms
ubuntu@sample-dms:~/.dms$
```

If successful, the directory exists and you are able to switch to it.

Once the DMS executable is installed, you can now proceed to [configure and deploy the DMS platform](../../configuration).

# Optional Steps

## Generate Bash Completion File

Optionally, you can generate a bash completion file, which improves usability of the DMS commands by allowing a user to autocomplete certain commands while typing.

1. Generate the bash completion file:

```shell
dms bash-completion -n dms > ~/dms.bash_completion
```

2. Load the bash completion file manually:

```shell
source ~/dms.bash_completion
```

<Warning>**NOTE:** Currently, the bash completion file must be loaded manually.  Hence, whenever you open a new terminal session to use the DMS, you will need to manually source the bash completion file again.</Warning>

3. Test the automcomplete functionality:

```shell
dms <press tab twice>
```

This displays a list of available top-level commands and their shortforms, if supported (e.g. "_config_" and "_co_"):

```shell
bash-completion  cl  cluster  co  config
```