# Styling Readme

## Dependencies

There are two main CSS libraries used in this project:

- [Basscss](https://github.com/basscss/basscss)
- [Bulma](https://github.com/jgthms/bulma)

Everything else is handled with custom (S)CSS.

## Terminology

### Utility Class

a css class that serves a very specific purpose. Example: `bg-green` applies:

``` css
.bg-green {
  background: #00ddbe;
}
```

This project uses a dependency, [basscss]() for providing a bulk of the utility
classes used.

CSS utilities are great but don't always work well responsively, also, if you
end up writing a DOM element like so:

``` html
<div class="flex flex-column items-center bg-green text-magenta py2 mr0
is-hidden-mobile">Foo </div>
```

Then you should probably refactor that into a more BEM-ish class.

## How Styles are Organized 

Styling is handled at three seperate levels:

### Component Level (low-level)

- All components have a `styles.scss` file in the component directory:

``` 
├── Button
│   ├── index.js
│   └── styles.scss
```

This style is "scoped" to the component, where the top-level dom element is the
top level css class for that styles.scss file. Read more about styling in the
[component readme](../components/README.md)

### Page Level (mid-level)

Each page (ie, "contact us" or "services" or "Products/Ego") should have it's
own stylesheet (again, styles.scss) where the top level class (ex: `ScorePage`)
contains all the subsequent styling, nested one level down. Since each page on
the site is fairly unique in it's own way, these styles can help fill in the
gaps where utility classes and components can't do the job.

_caveat_: some pages are very simple and can get by without a styles.scss because
they rely on utility classes, basscss, or just the provided components. 

### Top Level (high-level / global)

Anything related to globally used css classes are handled in the `src/styles/`.
This is a good place to put custom CSS utilities, common global styles that
might not make sense to make into a component, or for handling global variables
and dependencies (like bulma).
