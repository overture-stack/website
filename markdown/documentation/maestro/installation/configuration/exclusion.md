---
title: Configuring Exclusion Rules
---

Maestro supports data publication controls by providing configurable exclusion rules to omit specific analyses from being indexed based on metadata tags assigned by Song. Study, Analysis, File, Sample, Specimen and Donor IDs can all be used to exclude data from indexing.

Update your `.env.maestro` files with the following. Each property is a comma-separated list of the IDs you want to exclude from indexing. For any configurations to take effect, make sure to uncomment the exclusion rule you are adding, save your changes and restart the service.

```bash
# ---------------------------
# EXCLUSION RULES CONFIGS
# ---------------------------

# Exclusion rules configurations for Maestro

# Exclude by study ID
EXCLUSIONRULES_BYID_STUDYID=TEST-STUDY

# You can uncomment the following lines and add specific values as needed:

# Exclude specific analyses
# EXCLUSIONRULES_BYID_ANALYSIS=531had59-235f-315j-3918-gjaea93ga90j

# Exclude specific files
# EXCLUSIONRULES_BYID_FILE=41ba4fb3-9428-50b5-af6c-d779cd59b04d

# Exclude specific samples
# EXCLUSIONRULES_BYID_SAMPLE=a6381313-gaj3-eaif-95jd-nahnba9gn112

# Exclude specific specimens
# EXCLUSIONRULES_BYID_SPECIMEN=j928shgh-bme9-gka7-vac8-ga239sdaig98

# Exclude specific donors
# EXCLUSIONRULES_BYID_DONOR=DO232991
```