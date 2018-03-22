// require('bootstrap');
import Vue from 'vue';
import router from './router';
import App from './App.vue';

require('./../css/site.scss');

/* eslint-disable no-new */
new Vue({
  el: '#base',
  router,
  components: {
    App,
  },
  template: '<App/>',
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(() => {
      // console.log('SW registered: ', registration);
    }).catch(() => {
      // console.log('SW registration failed: ', registrationError);
    });
  });
}
