const state = {
  sidebar: {
    open: false,
  }
};
const mutations = {
  TOGGLE_SIDEBAR({sidebar}) {
    sidebar.open = !sidebar.open;
  },
};

export default {
  state,
  mutations,
  namespaced: true
};
