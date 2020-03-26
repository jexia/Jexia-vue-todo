
[![Runme](https://svc.runme.io/static/button.svg)](https://runme.io/run?app_id=0f5ab4e3-4fa6-4f0b-aa40-81aea4f0b39c)
# Todo App - JEXIA integration for vuetify-todo-pwa
Example application: This project is a simple integration [Jexia.com] with Todo [PWA] (Progressive Web App) inspired by [TodoMVC]. Perfect to learn the basics about [Jexia.com], [Vue.js], [Vuex] and [Vuetify] technologies.

[Jexia.com]: https://jexia.com
[PWA]: https://developers.google.com/web/progressive-web-apps
[TodoMVC]: http://todomvc.com
[Vue.js]: https://vuejs.org
[Vuex]: https://vuex.vuejs.org
[Vuetify]: https://vuetifyjs.com

<p align="center">
  <a href="https://vuetifytodo.davidgaroro.es" target="_blank" rel="noopener">
    <img src="https://vuetifytodo.davidgaroro.es/github/app.png">
    Live Demo
  </a>
</p>

## Features
 - Jexia project 
 - Vue CLI 3 + Webpack + vue-loader for single file Vue components
	-  Hot-reload in development
	-  Lint-on-save with [ESLint (Standard)](https://github.com/standard/eslint-config-standard)
	-  Stylus CSS preprocessor
 - Vue + vue-router + vuex working together
 - Vuetify a-la-carte (reduce project's size  in production)
 - Progressive Web App
	- App manifest
	- Service worker
	- Workbox options - [Cache Google Fonts]
	- 100/100 Lighthouse score

[Cache Google Fonts]: https://developers.google.com/web/tools/workbox/guides/common-recipes#google_fonts

## Built With
### Dependencies
| Name| Description | |
|--|--|:--:| 
|[jexia]|Cloud data management ecosystem|🖖
|[vue]|Progressive JavaScript Framework|🖖
|[vue-cli-3]|️Standard Tooling for Vue.js Development|🛠️
|[vue-router]|Official Router for Vue.js|🚦
|[vuex]|️Centralized State Management for Vue.js|🗃️
|[vuetify]|️Material Component Framework for Vue.js|📚

[jexia]: https://jexia.com
[vue]: https://vuejs.org
[vue-router]: https://router.vuejs.org
[vue-cli-3]: https://cli.vuejs.org
[vuex]: https://vuex.vuejs.org
[vuetify]: https://vuetifyjs.com

### Development Dependencies
| Name| Description | |
|--|--|:--:| 
|[jexia-js-sdk]|JS SDK for Jexia platform|🎨
|[stylus-loader]|CSS preprocessor for webpack|🎨
|[vue/cli-plugin-babel]|Compiler for next generation JavaScript|🐠
|[vue/cli-plugin-eslint]|Pluggable JavaScript linter|✍️
|[vue/cli-plugin-pwa]|JavaScript Library for adding support to PWA|📱

[jexia-js-sdk]: https://www.npmjs.com/package/jexia-sdk-js
[stylus-loader]: https://github.com/shama/stylus-loader
[vue/cli-plugin-babel]: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel
[vue/cli-plugin-eslint]: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint
[vue/cli-plugin-pwa]: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa

## Installation & Setup
### Clone repository
```
git clone https://github.com/jexia/jexia-vue-todo.git
cd jexia-vue-todo
```

### Install dependencies
```
npm install
```
### Install Jexia JS SDK
```
npm install jexia-sdk-js node-fetch ws --save
```
### Setup Jexia project
```
1. Create project
2. Add dataset with/ without fields with name todo
3. Add API-key
4. Create CRUD policy for API and Dataset
5. Update jexia-vue-todo/src/store.js with your project-id , API-key, API-secret:
	const Jexia_API = {
  		projectID: "project_id",   // Your Project ID at Jexia
  		key: "API key",  // Your API key at Jexia
  		secret: "API Secret", // Your API secret at JEXIA
	}
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
## License
[MIT](./LICENSE) &copy; jexia
