import { login } from "../../api/userService";
import router from "../../routes";

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
  isLoggedIn: (state) => {
    return state.user.email === "" ? false : true;
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

  logout({ commit }) {
    window.$cookies.remove("token");
    commit("removeUserFromState");
  },
};

const mutations = {
  saveUser(state, user) {
    state.user = user;
    router.push("/todos");
  },

  removeUserFromState(state) {
    state.user = { email: "", roles: [], tokenType: "", username: "" };
    router.push("/login").catch(() => {});
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
