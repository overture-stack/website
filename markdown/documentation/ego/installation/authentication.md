---
title: Authentication
---

Only users with administrative privileges, specifically those with the role set to `ADMIN`, can access the Ego UI and perform administrative operations without the need to directly interact with the API.

For a detailed, step-by-step example of how to use the Ego UI see our [guide on using the Ego UI](/documentation/ego/user-guide/admin-ui).

However, there are cases where a users may need or prefer to interact with the API endpoints directly via a command line interface (using cURL commands) or by using the Swagger UI.  In these cases, the user must first authenticate with the Ego API before using the endpoints.

Although an administrative user will typically use the Ego UI to perform operations, there may be situations where they wish to interact with the endpoints directly over a command line interface or using the Swagger UI. Applications may also need to programmatically interact with the Ego API. In these scenarios, the user or application must first authenticate with the Ego API.

For a detailed, step-by-step example of how a user can authenticate with and use the Ego API, see our [guide on using the Ego API](/documentation/ego/user-guide/api).
