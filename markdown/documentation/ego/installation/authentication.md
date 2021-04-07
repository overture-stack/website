---
title: Authentication
---

Only a user with administrative privileges (i.e. role set to `ADMIN`) can log into the Ego [Admin UI](/documentation/ego/user-guide/admin-ui) and perform all admin operations without needing to interact directly with the API.

However, there may often be cases where a user needs or wants to interact with the API endpoints directly over a command line interface (by issuing cURL commands) or using the Swagger UI.  In these scenarios, the user will need to first authenticate with the Ego API before using the endpoints.

Although an administrative user will typically use the Ego [Admin UI](/documentation/ego/user-guide/admin-ui) to perform operations, there may be scenarios where they wish to interact with the endpoints directly over a command line interface (by issuing cURL commands) or using the Swagger UI.  Applications may also need to programmatically interact with the Ego API.  In these scenarios, the user or application must first authenticate with the Ego API.

For a step-by-step example of how a user can authenticate with and use the Ego API, see [here](/documentation/ego/user-guide/api).