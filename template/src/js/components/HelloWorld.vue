<template>
    <div>
        <h1>\{{ msg }}</h1>
        <h2>Essential Links</h2>
        <a href="https://vuejs.org" target="_blank">
            Core Docs
        </a>
        <a href="https://forum.vuejs.org" target="_blank">
            Forum
        </a>
        <a href="https://chat.vuejs.org" target="_blank">
            Community Chat
        </a>
        <a href="https://twitter.com/vuejs" target="_blank">
            Twitter
        </a>
        <br>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">
            Docs for This Template
        </a>
        <h2>Ecosystem</h2>
        <a href="http://router.vuejs.org/" target="_blank">
            vue-router
        </a>
        <a href="http://vuex.vuejs.org/" target="_blank">
            vuex
        </a>
        <a href="http://vue-loader.vuejs.org/" target="_blank">
            vue-loader
        </a>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">
            awesome-vue
        </a>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>
