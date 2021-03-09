---
title: Introduction
---

Ego is an open-source, [OAuth 2.0](https://oauth.net/2/) and [OpenID Connect](https://auth0.com/docs/protocols/openid-connect-protocol) compliant application that simplifies user management by providing methods to authenticate (establish __*who*__ a user is) and authorize (establish __*what*__ a user is allowed to do) users of your application through well-known social Single-Sign-On identity providers like ORCID or Google. Ego provides stateless authorization using [JSON Web Tokens](https://jwt.io/introduction) (JWT) and can scale very well to a large number of users.

# Authentication 
Ego allows users to login and authenticate themselves using the well-known and secure OAuth 2.0 protocol.  Ego does not manage usernames and passwords, but instead relies on popular identity providers to complete this. Supported integrations include: 

- [ORCID](https://orcid.org/), a well established "research" identity passport
- Google 
- Github
- LinkedIn

Ego also uses the OpenID Connect (OIDC) layer built on top of OAuth 2.0 to verify the identity of end users logging in from various providers and to obtain basic user profile information (such as first and last names, contact e-,mail address, etc.)

# Authorization  
Once users are authenticated, they are granted [tokens](./getting-started/tokens.md) that encode permissions to access resources.  Ego supports: 

- User API Keys
- User JWTs
- Appliation JWTs

Secured applications can create and manage authorization tokens, and use those tokens to interact with third party applications registered in Ego to manage resource authorization.  For more details on how tokens are used in Ego, see [Tokens](./getting-started/tokens.md).

The actual permissions that can be granted are managed using Applications, Groups, or can be directly assigned to Users.  To understand how these entities work together to provide authorization management, see [How Ego Works](#how-ego-works).

# API

Ego provides a [Swagger-based API](https://swagger.io/docs/specification/2-0/what-is-swagger/) for third party applications to programmatically interact with Ego's core functionality.  One major benefit of Swagger-based APIs is that they also provide easy-to-use, interactive API documentation via a web interface.  In your deployment, the Ego Swagger-UI is accessible via https://ego._<yourDomain>_>/api/swagger-ui.html#/.  

# UI Management  
In addition to the comprehensive API, Ego is complemented by a UI application to make user management even easier.  For details on how to perform key user management tasks in the UI, see [Managing Users via the UI](./getting-started/usage.md#ui).

# How Ego Works
Once Ego has been setup, Ego resolves a user or application identity with the permissions that they have been granted, either directly or inherited through a group.  Permissions are encoded in a secret authorization JWT that has a limited life.  This default expiry period is configurable during Ego setup.

Downstream services (for example, a research data portal trying to determine allowed actions for a logged-in user) must make a [REST](https://www.codecademy.com/articles/what-is-rest) call to Ego to determine the user and authority represented by a JWT, or can accept a JWT and decide from the encoded information if a user or application is allowed to take a certain action.

The diagram below shows the relationship between the entities that work together to provide authorization and permission management in Ego:

![Entity Diagram](assets/how-it-works.png 'Ego Entity Diagram')


The key entities described above

| Entity  | Description|
|-|-|
| User | A user is any individual registered in Ego who needs to authorize themselves with Ego-aware applications. |
| Admin | An admin is a power user whose role is set to ‘ADMIN’. Only admins are authorized to register users, groups, applications & policies using Ego’s REST endpoints. |
| Group | A group of users with similar properties. Admins can create new groups and add users to them. They can then assign permissions to an entire group which will be reflected for each user in that group. |
| Policy | A policy is a scope or context for which an application may want to grant a user or group READ/WRITE/DENY permissions. |
| Permission | A user or group can be given READ/WRITE/DENY permissions for a particular policy. |
| Application | An application is a third party service that registers itself with EGO so that EGO can authorize users on its behalf. Upon registration, the service must provide a client_id and client secret. |
| Application Authentication Token |  This a Basic JWT token which encodes a client id and secret, and authorizes an application to interact with Ego. This is passed in the authorization request header when an application uses the check_token endpoint in order to check a user’s token. |
| User Authentication Token | This is a Bearer token which encodes user information, and is passed to a user when they are authenticated through OAuth single sign-on. This Bearer token is passed in the request authorization header whenever the user wants to access Ego’s resources. If the JWT denotes that a user has an ADMIN role, they are permitted to create and modify resources (users, groups, permissions, policies). |
| User Authorization Token | This is a random token which is generated to authorize a user for a specific scope, in the context of an application. |