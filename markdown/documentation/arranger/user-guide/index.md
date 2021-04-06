---
title: User Guide
---

# Configuring Your Project

Once you have [added your project](/documentation/arranger/installation/configuration/project), you can use the Arranger Admin UI to configure the specific UI components and properties that will appear in the front-end data portal.

## Configuring Extended Field Properties

## Configuring the Facet Panel

## Configuring the Results Table

## Configuring Quick Search

# Exporting Your Project

You may need to export your project configurations for various reasons, such as:

* To simply backup your configs & metadata as good practice
* To re-use the configs in another Arranger instance or deployment
* To prepare for data migration

To export a project's configurations:

1. Go to the Arranger Admin UI at `localhost:8080`.
2. Click **Export** beside the project you need to export.
3. Your browser will automatically download a ZIP file containing the project's configuration JSON files:

- `aggs-state.json`
- `columns-state.json`
- `extended.json`
- `matchbox-state.json`

# Deleting a Project

You may need to delete a project occasionally as part of general cleanup.  For example, perhaps you created multiple projects, but since only one can ever be active at a time, you want to clean up the old ones.

<Warning>**NOTE**: Before deleting a project, make sure you wish to proceed with the operation because it is not reversible.  We recommend you first backup the project configurations (see [here](/documentation/arranger/user-guide#exporting-your-project)) in case you ever need to re-create the project for any reason.</Warning>

To delete a project:

1. Go to the Arranger Admin UI at `localhost:8080`.
2. Click **Delete** beside the project you need to export.
3. Confirm the deletion.