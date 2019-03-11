# File structure example for Vue.js projects
Use only what you need; You can eventually add other folders depending on your need, such as /services, /constants, etc.

    .
    ├── public
    │   ├── favicon.ico
    │   ├── manifest.json
    │   ├── index.html
    │   ├── robots.txt
    │   ├── images
    │   │   └── ...
    │   └── ...
    └── src
        ├── api
        │   └── ...                     # abstractions for making API requests
        ├── assets
        │   ├── css
        │   ├── images
        │   ├── translations
        │   ├── scss                    # global styles
        │   └── ...
        ├── components
        │   ├── sidebar                 # Domain components
        │   │   ├── SidebarMenu.vue
        │   │   ├── SidebarNews.vue
        │   │   ├── SidebarSearch.vue
        │   │   └── ...
        │   ├── layout                  # Components used only once per view
        │   │   ├── AppHeader.vue
        │   │   └── ...
        │   └── ui                      # Reusable and logicless components
        │       ├── AppButton.vue
        │       └── ...
        ├── router
        |   └── ...
        ├── store                       # Vuex store
        |    ├── index.js               # where we assemble modules and export the store
        |    └── modules                # (optional) use modules to organise different states
        |        ├── cart.js
        |        ├── products.js
        |        └── ...
        ├── views                       # views for pages
        |   ├── UserView.vue
        |   ├── ItemList.vue
        |   └── ...
        ├── app.js
        ├── App.vue
        └── constants.js


## When using backend
    .
    └── src
        ├── app     # App logic
        ├── client  # (optional) Where we mount vue after any server-side preloads
        ├── server  # Server logic
        └── ...

## Naming conventions

* Component names should always be multi-word, Use “UserCard” or “ProfileCard” instead of “Card” for example. Root components should be prefixed with “App”,
* Filenames of single-file components should either be always PascalCase or always kebab-case. Use “UserCard.vue” or “user-card.vue”.
* Child components should include their parent name as a prefix. For example if you would like a “Photo” component used in the “UserCard” you will name it “UserCardPhoto”. It’s for better readability since files in a folder are usually order alphabetically.
* Always use full name instead of abbreviation in the name of your components. For example don’t use “UDSettings”, use instead “UserDashboardSettings”.

## Examples and references

[Structure a Vue app](https://itnext.io/how-to-structure-a-vue-js-project-29e4ddc1aeeb)

[Structuring vue components ](https://vueschool.io/articles/vuejs-tutorials/structuring-vue-components/)

[Themes for Vue](https://vuejs.org/v2/examples/themes.html)

[Hackernews 2.0 example](https://github.com/vuejs/vue-hackernews-2.0)

[Separate client from server](https://github.com/devCrossNet/vue-starter/tree/master/src)
