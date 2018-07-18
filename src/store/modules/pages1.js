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
const state = {
  count: 20,
  items: [],
  checkoutStatus: null
};

// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    return 'xx';
  }
};

// actions
const actions = {
  checkout ({ commit, state }, products) {
    commit('setCheckoutStatus', null);
  },
};

// mutations
const mutations = {
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
