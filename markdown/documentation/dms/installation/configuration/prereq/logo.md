---
title: Copy Logo File to Assets Folder
---

By default, the DMS UI (Data Portal) displays the Overture logo in the header. However, an individual or institution may optionally wish to brand the portal with their own logo and portal name:

![Entity](../../../assets/logo-example.png 'Logo Example')

While the portal name is configured during the interactive questionnaire (see [here](../../configure-dms#configure-dms-ui)), **the logo image must be copied into the correct assets folder before configuration and deployment are run**.

To copy your logo file to the assets folder:

1. Make sure you have a logo file specifically named `dms_logo.<format>`, where `<format>` must be one of the supported image formats: JPG, PNG, SVG.  The file must be stored somewhere on the environment hosting the DMS.


2. Switch to the `~/.dms/assets` folder:

```shell
$ cd ~/.dms/assets
```

<Warning>**NOTE:** The `~/.dms` folder and its sub-folders are created when you first run the DMS executable.  This should have already been generated during your installation steps (see [here](../../../installation#install-the-dms-executable)).  However, if the folder does not exist, then simply run `dms -h` to do so.</Warning>

3. Copy or move your logo file from your `<sourceFolder>` to the `~/.dms/assets` folder:

```shell
$ cp <sourceFolder>/dms_logo.png dms_logo.png 
```

4. List the folder contents to make sure the file has been copied or moved:

```shell
$ ls
dms_logo.png
```