---
title: Copy Logo File to Assets Folder
---

The DMS UI (Data Portal) displays the Overture logo in the header by default. However, users or institutions may prefer to use their own logo:

![Entity](../../../assets/logo-example.png 'Logo Example')

The portal name can be set during the interactive questionnaire ([details here](../../configure-dms#configure-dms-ui)). **Ensure the logo image is placed in the proper assets folder before starting the configuration and deployment process**.

Follow these steps to copy your logo file to the assets folder:

### 1. Prepare Your Logo

Have your logo file named as `dms_logo.<format>`, where `<format>` is one of the supported image formats: JPG, PNG, SVG. This file should be located on the DMS hosting environment.

### 2. Navigate to the Assets Directory

Change to the `~/.dms/assets` directory:

```bash
cd ~/.dms/assets
```

<Warning>**NOTE:** The `~/.dms` directory and its sub-directories are created the first time the DMS executable is run. You should have encountered this directory during the installation ([see installation steps](../../../installation#install-the-dms-executable)). If the directory is missing, run `dms -h` to generate it.</Warning>

### 3. Transfer Your Logo

Copy your logo from its current location (`<sourceFolder>`) to the `~/.dms/assets` directory:

```bash
cp <sourceFolder>/dms_logo.png dms_logo.png 
```

### 4. Verify the Transfer

List the contents of the directory to ensure your logo file is present:

```bash
$ ls
dms_logo.png
```

