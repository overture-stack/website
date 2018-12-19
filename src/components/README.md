# Components Directory

## Overview

The components folder is dedicated to providing commonly used components across the Overture website.

Each component should get it's own folder and follow a similar layout:

```
.
├── <Component_name>
│   ├── index.js
│   └── styles.scss
```

More complex component might need to make use of sub-component folders with the same
structure, but will need to be named. The `Navbar` component is a good example
of this:

``` 
.
├── NavBar
│   ├── NavLink
│   │   └── index.js
│   ├── Popup
│   │   ├── index.js
│   │   └── styles.scss
│   ├── assets
│   │   └── overture_logo.svg
│   ├── index.js
│   └── styles.scss
```

## Styling

To avoid class-clashing, every component's top level dom element should have a
class that matches a top level class in the `styles.scss` file. For example, the
`Button` component uses lots of styles from [Bulma](https://bulma.io/documentation/elements/button/) but still has a
`custom-button` top level class that matches to the Button component.

## Non-generic Components

Some of these components are highly specialized but are still used in multiple
places. For example, many pages on the Overture Site use a ui-mockup of a
terminal with green text; there is a `Terminal` component that makes this a lot
more re-useable, despite being faily specialized.

