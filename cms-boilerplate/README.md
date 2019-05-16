## Vue.js boilerplate for CMS

**Note**: this is only meant to enchance regular multi page sites and not intended
for building big applications or a Vue.js specific app. For single page apps use
[Vue CLI](https://cli.vuejs.org/).

This boilerplate for Vue.js does not compile traditional templates. If the component is
small and accepts props for any text content, then it's best the template be defined
as template strings.

Otherwise, for the sake of translatability, templates should be defined separately as
x-templates, where it is also possible to use other means of rendering such as PHP in
wordpress or liquid tags in Voog.

The compiled script doesn't and shouldn't include the framework itself. Vue and any other
used libraries should be included separately and rendered conditionally based on whether it
is used on the page or not. If it's something that's used often, then it may be installed as
a module. This because the script is not split into chunks and would be unnecessarily large
for some pages.

The aforementioned also counts for CSS libraries.

The boilerplate is bare-bones - anything project specific can be added and organised incrementally.

File structure example:
```
    .
    ├── CMS stuff                          # libraries and framework here
    │   └── ...
    └── src/
        ├── assets/                        # fonts, icons, images...
        │   └── ...
        ├── style/                         # scss
        │   └── ...
        └── app/
            ├── components/
            │   ├── forms/                 # domain components example
            │   │   ├── inputText.js
            │   │   ├── inputCheckbox.js
            │   │   └── ...
            │   ├── layout/                # components used only once
            │   │   ├── AppHeader.js
            │   │   └── AppMenu.js
            │   │   └── ...
            │   ├── AppModal.js
            │   └── ...
            ├── pages/                     # a Vue instance for every page
            |   ├── HomePage.js
            |   ├── ProductPage/
            |   |   ├── index.js           # so we can import ProductPage directly
            |   |   ├── routes.js          # page specific routing
            |   |   ├── ShoppingCart.js    # page specific components
            |   |   └── ...
            |   └── ...
            ├── helpers/                   # reusable functions
            |   └── ...
            ├── mixins/                    # reusable component functionality
            |   └── ...
            ├── index.js
            └── store.js                   # Vuex store
```

### Getting started
Run npm install:

```bash
$ npm i
```

### Development
Compiles app.min.js, app.min.css and runs any optional command defined in webpack.config:

```bash
$ npm run watch
```

### Production build
```bash
$ npm run build
```

TODO:
1. Find the preferred eslint settings (https://eslint.org/docs/rules/)
