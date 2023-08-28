---
title: Introduction
---

Ego streamlines user and application management using methods compliant with <a href="https://oauth.net/2/" target="_blank">OAuth 2.0</a> and <a href="https://auth0.com/docs/protocols/openid-connect-protocol" target="_blank">OpenID Connect</a>. It simplifies user authentication and authorization by integrating with popular single-sign-on identity providers like ORCiD, Google, GitHub, and LinkedIn. Thanks to its use of <a href="https://jwt.io/introduction" target="_blank">JSON Web Tokens</a> (JWT) for stateless authorization, Ego is scalable and can to handle large numbers of users and applications.

# Key Features

## Authentication

Ego enables users to log in and authenticate themselves using the secure OAuth 2.0 protocol. Instead of managing usernames and passwords, Ego relies on popular identity providers for this purpose. Supported integrations include:

- Google
- GitHub
- LinkedIn
- <a href="https://orcid.org/" target="_blank">ORCiD</a> (a well-established research identity passport)

Additionally, Ego uses the OpenID Connect (OIDC) layer on top of OAuth 2.0 to verify the identity of end users logging in from various providers. This process retrieves basic user profile information, such as first and last names and contact email addresses.

## Authorization

Once users are authenticated, they are granted <a href="/documentation/ego/technical/#ego-tokens" target="_blank">tokens</a> that encode permissions for accessing resources. Ego supports the following types of authorization tokens:

- **Application JWTs:** For authorizing individual applications.
- **User JWTs:** For authorizing individual users.
- **User API Key:** For users to interact with applications registered in Ego using the level of authority defined by the key.

Secured applications can create, manage, and use authorization tokens to interact with third-party applications registered in Ego. For detailed information on how tokens are used in Ego, refer to the <a href="/documentation/ego/technical/#ego-tokens" target="_blank">Tokens</a> section below.

Permissions granted by Ego can be assigned to applications, groups, or directly to users. To understand how these entities work together in Ego, please see the <a href="/documentation/ego/technical/" target="_blank">How Ego Works</a> section.

## Ego API

Ego provides an API based on the <a href="https://swagger.io/specification/" target="_blank">OpenAPI specification</a> (formerly known as the Swagger specification), which allows users to interact with Ego's core functionality manually or programmatically. The Swagger UI, ideal for exploration and simple use cases, contains detailed descriptions of all available endpoints, expected inputs, and error responses. Users and administrators can also interact with the API by issuing cURL commands via their terminal. For detailed instructions on API use, refer to the documentation <a href="/documentation/ego/user-guide/api/" target="_blank">here</a>.

## Ego UI

Ego can be paired with an administrative UI (Ego UI) to provide a more easily accessible option for user management tasks. To learn more about using Ego's admin UI, please refer to our documentation on <a href="/documentation/ego/user-guide/admin-ui/" target="_blank">using Ego's admin UI</a>.

![Entity](/assets/users.png 'Users')
