import { getAllTodos, createTodo, removeTodo } from "../../api/todoService";

const state = () => ({
  todos: [],
});

const getters = {
  getTodos: (state) => {
    return state.todos;
  },

  getRemaining: (state) => {
    return state.todos.filter((todo) => todo.completed === false).length;
  },
  getAnyRemaining: (state, getters) => {
    return getters.getRemaining != 0;
  },
};

const actions = {
  async addTodo({ commit, rootGetters }, todo) {
    if (todo.trim() !== "") {
      const { username } = rootGetters["users/getUser"];
      const newTodo = {
        title: todo,
        completed: false,
        username,
      };
      const response = await createTodo(newTodo);
      if (response.status === 200) {
        commit("pushTodoToTodos", response.data.todos);
      }
    }
  },

  async fetchTodos({ commit, rootGetters }) {
    const response = await getAllTodos();
    if (response.status === 200) {
      const { username } = rootGetters["users/getUser"];
      const userTodos = response.data.todos.filter(
        (todo) => todo.username === username
      );
      commit("updateTodos", userTodos);
    }
  },

  changeTodoStatus({ commit, state }, todo) {
    const changedTodo = { ...todo, completed: !todo.completed };
    const updatedTodos = state.todos.map((todo) => {
      if (todo.id === changedTodo.id) {
        return changedTodo;
      }
      return todo;
    });
    commit("updateTodos", updatedTodos);
  },

  async removeTodo({ commit, state }, id) {
    const response = await removeTodo(id);
    if (response.status === 200) {
      const updatedTodos = state.todos.filter((todo) => todo.id !== id);
      commit("updateTodos", updatedTodos);
    }
  },

  changeAllTodosStatus({ commit, state }, event) {
    const updatedTodos = state.todos.map((todo) => {
      return { ...todo, completed: event.target.checked };
    });
    commit("updateTodos", updatedTodos);
  },
};

const mutations = {
  pushTodoToTodos(state, newTodos) {
    newTodos.forEach((todo) => state.todos.push(todo));
  },

  updateTodos(state, updatedTodos) {
    state.todos = updatedTodos;
  },

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
