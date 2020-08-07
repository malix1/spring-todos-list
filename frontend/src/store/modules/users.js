import { login } from "../../api/userService";

const state = () => ({
  user: {
    email: "",
    roles: [],
    tokenType: "",
    username: "",
  },
});

const getters = {
  getUser: (state) => {
    return state.user;
  },
};

const actions = {
  async login({ commit }, user) {
    const response = await login(user);
    if (response.status === 200) {
      const loggedInUser = {
        email: response.data.email,
        roles: response.data.roles,
        tokenType: response.data.tokenType,
        username: response.data.username,
      };
      console.log(response);
      window.$cookies.set("token", response.data.accessToken);
      commit("saveUser", loggedInUser);
    }   
  },
};

const mutations = {
  saveUser(state, user) {
    state.user = user;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
