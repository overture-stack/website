---
title: Introduction
---

Arranger is a powerful collection of reusable components that allows administrators to organize an intuitive user interface (data portal) for data search and exploration.

It integrates with an [Elasticsearch](https://www.elastic.co/) cluster to quickly spin up a data portal which search capabilities based on a defined Elasticsearch index mapping.

# Features

## GraphQL Search API

Arranger automatically generates a search API based on the index mapping you have configured for your underlying Elasticsearch cluster.  This provides powerful and flexible capabilities including:

* The ability to auto-generate and expose a search API and user interface (data portal) based on a custom index mapping of your choosing and configuration.

* The API is [GraphQL](https://graphql.org/)-based and fully aware of your Elasticsearch data model.

* The API uses a consistent query & filter notation (called `SQON`) which is both straightforward for humans to understand **and** simple for machine

## Built-In UI Components

Arranger provides a built-in set of UI components that are easily configured to interact with the search API and to customize what is exposed to the data portal.  Key capabilities include:

* Provides a canned set of data types (e.g. boolean, string, date, list, etc.) and pre-built aggregation components for you to customize the searchable facets in your data portal.

* Ability to use a default theme for your data portal, or customize it with your own branded theme.

## Administrative UI

Arranger also provides an easy-to-use admin UI for administrators to manage and customize the content of their data portal.  Key capabilities include:

* Ability to configure which filters are displayed in the portal and customize their display names and order.

* Ability to configure which data columns are displayed in the search results table and customize their display name and order.

* Ability to easily import and export these configurations for reusability and migration.

# Integrations

Arranger integrates with your underlying Elasticsearch cluster to automatically generate the search API based on the index mapping you have configured.  You must have Elasticsearch deployed in advance and your mapping determined as prequisites.  Arranger will also need the correct credentials to authenticate with Elasticsearch.

# Architecture

Arranger and its components integrate with your Elasticsearch cluster, providing:

* A single-instance administrative web UI to configure and customize the data portal content
* A horizontally-scalable search API layer that interfaces with Elasticsearch to query and return data portal based on your configurations

![Entity](/assets/arch.png 'Architecture')