---
title: SQON Filter Notation
---

Arranger uses a custom filter notation SQON (Serializable Query Object Notation, pronounced like "Scone") to provide a flexible system for combining filters in a JSON object format.

A SQON object consists of two types of nested objects, **Value Objects** and **Operation Objects**.

# Value Objects

 Value objects specify the field being queried and the values used for the query. This filter can specify to include or exclude fields with any of the listed values. It will have the following format:

  ```SQON
    {
      "fieldName":"", //name of the field this operation applies to
      "value":[] //List of values for the field if using the "in" operation, or a scalar value for ">=" and "<=" operations
    }
  ```

# Operation Logic

Operation objects apply boolean logic (AND, OR, NOT) to a list of operation objects. These can be either **combination operations** or **field operations**

## Combination Operations

Combination operations are used to group one or more filters together. For example:

```SQON
{
  "op":"", // Operation to apply to content, this can be ["and", "or", "not"]
  "content":[] // List of Operation objects that the boolean operation will apply to
}
```

<Warning>**Note:** The top level of a SQON must always be a Combination Operation, even if only a single filter is being applied.</Warning>

## Field Operations

Field operations are used filter value objects

```SQON
{
  "op":"", //Operation to apply to content ["in", "<=", ">="]
  "content":{} //Value object specifying the field and list of values that the field must be "in" or "not-in"
}
```

# Example SQON

```SQON
  {
    op: "and",
    content: [
      {
        op: "or",
        content: [
          {
            op: "in",
            content: {
              fieldName: "id",
              value: ["id123"]
            }
          }
        ]
      }, // Please provide explaination in this comment
      {
        op: "in",
        content: {
          fieldName: "id",
          value: ["id123"]
        }
      }
    ]
  } // Here as well too, or wherever you find necessary
  ```