import Vue from 'vue';
import Router from 'vue-router';
import VueDemo from '@/pages/demo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'page-demo',
      component: VueDemo,
      meta: {
        pageName: '组件案例展示',
      },
    }
  ],
});
