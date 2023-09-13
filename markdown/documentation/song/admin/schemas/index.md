---
title: Introducing Dynamic Schemas 
---

# JSON Schema

Song utilizes <a href="https://json-schema.org/" target="_blank" rel="noopener noreferrer">JSON Schema</a> to validate metadata during submission. Data is submitted to Song in JSON format and undergoes validation against the data model schema. This schema ensures the presence of required fields and validates the contents of each field, ensuring adherence to the desired data type and allowed values. This validation process preserves the integrity and quality of the metadata within Song.

# Analysis Schemas

In Song, metadata is captured and submitted as **analyses**. An analysis represents a complete metadata record that includes references to the corresponding data files, all grouped as a single JSON object.

When submitting an analysis to Song, you need to specify the desired **schema** (data model) to be used for validation. This is defined in your analysis file using the `analysis type` field.

The schema associated with the analysis type consists of two parts:

1. A minimal, **base schema** that is defined for patient data.

2. A flexible **dynamic schema** that is configured and uploaded by a Song administrator.

These schema components ensure accurate and consistent metadata validation within Song.

## The Song Base Schema

The **base schema** is a minimal set of data needed for a schema. The base schema data includes basic non-identifiable primary keys of patient data, including:

- Donor ID, Specimen ID, and Sample ID
- Basic cancer sample descriptors

The base schema can be seen in the code block shown below: 

```json
{
  "studyId": "EXAMPLE",
  "analysisType": {
    "name": "sequencing_experiment"
  },
  "samples": [
    {
      "submitterSampleId": "exammple-sample-id",
      "matchedNormalSubmitterSampleId": null,
      "sampleType": "Amplified DNA",
      "specimen": {
        "submitterSpecimenId": "exammple-specimen-id",
        "specimenType": "Normal",
        "tumourNormalDesignation": "Normal",
        "specimenTissueSource": "Blood derived"
      },
      "donor": {
        "submitterDonorId": "exammple-donor-id",
        "gender": "Male"
      }
    }
  ]
}
```

The base schema and the allowed values for all fields are defined by the Song **base meta-schema**, which is referenced below.

<details>
  <summary>Song base schema as JSON Schema</summary>
  

```json
{
    "name": "variant_calling_test",
    "version": 1,
    "createdAt": "2021-03-04T23:22:42.025146",
    "schema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "id": "analysisPayload",
        "type": "object",
        "definitions": {
            "common": {
                "md5": {
                    "type": "string",
                    "pattern": "^[a-fA-F0-9]{32}$"
                },
                "submitterId": {
                    "type": "string",
                    "pattern": "^[A-Za-z0-9\\-\\._]{1,64}$"
                },
                "info": {
                    "type": "object"
                }
            },
            "file": {
                "fileType": {
                    "type": "string",
                    "enum": [
                        "FASTA",
                        "FAI",
                        "FASTQ",
                        "BAM",
                        "BAI",
                        "VCF",
                        "TBI",
                        "IDX",
                        "XML",
                        "TGZ",
                        "CRAM",
                        "CRAI"
                    ]
                },
                "fileData": {
                    "type": "object",
                    "required": [
                        "dataType",
                        "fileName",
                        "fileSize",
                        "fileType",
                        "fileAccess",
                        "fileMd5sum"
                    ],
                    "properties": {
                        "dataType": {
                            "type": "string"
                        },
                        "fileName": {
                            "type": "string",
                            "pattern": "^[A-Za-z0-9_\\.\\-\\[\\]\\(\\)]+$"
                        },
                        "fileSize": {
                            "type": "integer",
                            "min": 0
                        },
                        "fileAccess": {
                            "type": "string",
                            "enum": [
                                "open",
                                "controlled"
                            ]
                        },
                        "fileType": {
                            "$ref": "#/definitions/file/fileType"
                        },
                        "fileMd5sum": {
                            "$ref": "#/definitions/common/md5"
                        },
                        "info": {
                            "$ref": "#/definitions/common/info"
                        }
                    }
                }
            },
            "donor": {
                "gender": {
                    "type": "string",
                    "enum": [
                        "Male",
                        "Female",
                        "Other"
                    ]
                },
                "donorData": {
                    "type": "object",
                    "required": [
                        "submitterDonorId",
                        "gender"
                    ],
                    "properties": {
                        "submitterDonorId": {
                            "$ref": "#/definitions/common/submitterId"
                        },
                        "gender": {
                            "$ref": "#/definitions/donor/gender"
                        },
                        "info": {
                            "$ref": "#/definitions/common/info"
                        }
                    }
                }
            },
            "specimen": {
                "specimenTissueSource": {
                    "type": "string",
                    "enum": [
                        "Blood derived",
                        "Blood derived - bone marrow",
                        "Blood derived - peripheral blood",
                        "Bone marrow",
                        "Buccal cell",
                        "Lymph node",
                        "Solid tissue",
                        "Plasma",
                        "Serum",
                        "Urine",
                        "Cerebrospinal fluid",
                        "Sputum",
                        "Other",
                        "Pleural effusion",
                        "Mononuclear cells from bone marrow",
                        "Saliva",
                        "Skin",
                        "Intestine",
                        "Buffy coat",
                        "Stomach",
                        "Esophagus",
                        "Tonsil",
                        "Spleen",
                        "Bone",
                        "Cerebellum",
                        "Endometrium"
                    ]
                },
                "specimenType": {
                    "type": "string",
                    "enum": [
                        "Normal",
                        "Normal - tissue adjacent to primary tumour",
                        "Primary tumour",
                        "Primary tumour - adjacent to normal",
                        "Primary tumour - additional new primary",
                        "Recurrent tumour",
                        "Metastatic tumour",
                        "Metastatic tumour - metastasis local to lymph node",
                        "Metastatic tumour - metastasis to distant location",
                        "Metastatic tumour - additional metastatic",
                        "Xenograft - derived from primary tumour",
                        "Xenograft - derived from tumour cell line",
                        "Cell line - derived from xenograft tumour",
                        "Cell line - derived from tumour",
                        "Cell line - derived from normal"
                    ]
                },
                "tumourNormalDesignation": {
                    "type": "string",
                    "enum": [
                        "Normal",
                        "Tumour"
                    ]
                },
                "specimenData": {
                    "type": "object",
                    "required": [
                        "submitterSpecimenId",
                        "specimenTissueSource",
                        "tumourNormalDesignation",
                        "specimenType"
                    ],
                    "properties": {
                        "submitterSpecimenId": {
                            "$ref": "#/definitions/common/submitterId"
                        },
                        "specimenTissueSource": {
                            "$ref": "#/definitions/specimen/specimenTissueSource"
                        },
                        "tumourNormalDesignation": {
                            "$ref": "#/definitions/specimen/tumourNormalDesignation"
                        },
                        "specimenType": {
                            "$ref": "#/definitions/specimen/specimenType"
                        },
                        "specimenClass": {
                            "not": {}
                        },
                        "info": {
                            "$ref": "#/definitions/common/info"
                        }
                    }
                }
            },
            "analysisType": {
                "type": "object",
                "required": [
                    "name"
                ],
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "version": {
                        "type": [
                            "integer",
                            "null"
                        ]
                    }
                }
            },
            "sample": {
                "sampleTypes": {
                    "type": "string",
                    "enum": [
                        "Total DNA",
                        "Amplified DNA",
                        "ctDNA",
                        "Other DNA enrichments",
                        "Total RNA",
                        "Ribo-Zero RNA",
                        "polyA+ RNA",
                        "Other RNA fractions"
                    ]
                },
                "sampleData": {
                    "type": "object",
                    "required": [
                        "submitterSampleId",
                        "sampleType"
                    ],
                    "properties": {
                        "submitterSampleId": {
                            "$ref": "#/definitions/common/submitterId"
                        },
                        "sampleType": {
                            "$ref": "#/definitions/sample/sampleTypes"
                        },
                        "info": {
                            "$ref": "#/definitions/common/info"
                        }
                    }
                }
            }
        },
        "required": [
            "studyId",
            "analysisType",
            "samples",
            "files",
            "experiment"
        ],
        "properties": {
            "analysisId": {
                "not": {}
            },
            "studyId": {
                "type": "string",
                "minLength": 1
            },
            "analysisType": {
                "allOf": [
                    {
                        "$ref": "#/definitions/analysisType"
                    }
                ]
            },
            "samples": {
                "type": "array",
                "minItems": 1,
                "items": {
                    "type": "object",
                    "allOf": [
                        {
                            "$ref": "#/definitions/sample/sampleData"
                        }
                    ],
                    "required": [
                        "specimen",
                        "donor"
                    ],
                    "properties": {
                        "specimen": {
                            "$ref": "#/definitions/specimen/specimenData"
                        },
                        "donor": {
                            "$ref": "#/definitions/donor/donorData"
                        }
                    },
                    "if": {
                        "properties": {
                            "specimen": {
                                "properties": {
                                    "tumourNormalDesignation": {
                                        "const": "Tumour"
                                    }
                                }
                            }
                        }
                    },
                    "then": {
                        "properties": {
                            "matchedNormalSubmitterSampleId": {
                                "$ref": "#/definitions/common/submitterId"
                            }
                        },
                        "required": [
                            "matchedNormalSubmitterSampleId"
                        ]
                    },
                    "else": {
                        "properties": {
                            "matchedNormalSubmitterSampleId": {
                                "const": null
                            }
                        },
                        "required": [
                            "matchedNormalSubmitterSampleId"
                        ]
                    }
                }
            },
            "files": {
                "type": "array",
                "minItems": 1,
                "items": {
                    "$ref": "#/definitions/file/fileData"
                }
            }
        }
    }
}

```

</details>