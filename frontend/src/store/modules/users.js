import { login } from "../../api/userService";
import router from "../../routes";

const state = () => ({
  user: {
    email: "",
    roles: [],
    tokenType: "",
    username: "",
  },
  status: { code: "", message: "" },
});

const getters = {
  getUser: (state) => {
    return state.user;
  },
  isLoggedIn: () => {
    const token = window.$cookies.get("token");
    return token === "" ? false : true;
  },
  getError: (state) => {
    return state.status;
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
      window.$cookies.set("token", response.data.accessToken);
      commit("saveUser", loggedInUser);
    } else {
      commit("giveError", response);
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
    state.error = { status: "", message: "" };
    router.push("/todos");
  },

  removeUserFromState(state) {
    state.user = { email: "", roles: [], tokenType: "", username: "" };
    router.push("/login").catch(() => {});
  },

  giveError(state, response) {
    state.status = response;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
