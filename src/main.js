// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { Table, TableColumn, Pagination, Dialog, Select, Option, Checkbox, CheckboxGroup, CheckboxButton } from 'element-ui';

import '@/assets/scss/main.scss';
import '@/assets/scss/element.scss';


import App from './App';
import router from './router';
import store from './store/';



Vue.config.productionTip = false;



Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Select);
Vue.use(Option);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(CheckboxButton);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
