import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import VueFilterDateFormat from 'vue-filter-date-format';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import moment from 'moment'
import VueConfirmDialog from 'vue-confirm-dialog'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueFilterDateFormat);
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('YYYY/MM/DD ')
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')