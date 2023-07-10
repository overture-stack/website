---
title: Configuring Exclusion Rules
---

Maestro supports data publication controls by providing configurable exclusion rules to omit specific analyses from being indexed based on metadata tags assigned by Song. Study, Analysis, File, Sample, Specimen and Donor IDs can all be used to exclude data from indexing.

Locate the following section of your `application.yml` file:

```yaml
  # exclusion rules configs
  exclusionRules:
    byId:
      studyId:
        - TEST-STUDY
#      analysis:
#        - 531had59-235f-315j-3918-gjaea93ga90j
#      file:
#        - 41ba4fb3-9428-50b5-af6c-d779cd59b04d
#      sample:
#        - a6381313-gaj3-eaif-95jd-nahnba9gn112
#      specimen:
#        - j928shgh-bme9-gka7-vac8-ga239sdaig98
#      donor:
#        - DO232991
```

Each property is a comma-separated list of the IDs you want to exclude from indexing.

For any configurations to take effect, make sure to uncomment the exclusion rule you are adding, save your changes and restart the service.