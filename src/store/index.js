/**
 * File Created by wuxiaojun at 2018/7/18.
 * Copyright 2016 CMCC Corporation Limited.
 * All rights reserved.
 *
 * @Desc
 * @author 吴小军 <wuxiaojun@chmi.chinamobile.com>
 * @date 2018/7/18
 * @version
 */
import Vue from 'vue';
import Vuex from 'vuex';
import pages1 from './modules/pages1';
import pages2 from './modules/pages2';
import actions from './actions';
import mutations from './mutations';


Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  // strict: debug,// 测试环境下使用严格模式
  actions,
  mutations,
  modules: {
    pages1,
    pages2
  },
  // plugins: debug ? [createLogger()] : []
})
