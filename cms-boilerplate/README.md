## Vue.js boilerplate for CMS

This boilerplate of Vue.js does not compile traditional templates. If the component
does not have translatable text, the component template can be defined via template
strings.

Otherwise, for the sake of translatability, templates should be defined as
x-templates, where it is also possible to use CMS specific rendering such as
liquid tags or in the case of Wordpress - PHP.

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
1. preferred linter settings (https://eslint.org/docs/rules/)
