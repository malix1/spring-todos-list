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

  async fetchTodos({ commit }) {
    const response = await getAllTodos();
    if (response.status === 200) {
      commit("saveFetchTodos", response.data.todos);
    }
  },

  changeTodoStatus({ commit }, todo) {
    const changedTodo = { ...todo, completed: !todo.completed };
    commit("saveChangedTodoStatus", changedTodo);
  },

  async removeTodo({ commit }, id) {
    const response = await removeTodo(id);
    if (response.status === 200) {
      commit("removeTodoFromTodos", id);
    }
  },

  changeAllTodosStatus({ commit }, event) {
    commit("saveAllTodosStatus", event);
  },
};

const mutations = {
  pushTodoToTodos(state, newTodos) {
    newTodos.forEach((todo) => state.todos.push(todo));
  },

  saveFetchTodos(state, todos) {
    state.todos = todos;
  },

  saveChangedTodoStatus(state, changedTodo) {
    const updatedTodo = state.todos.map((todo) => {
      if (todo.id === changedTodo.id) {
        return changedTodo;
      }
      return todo;
    });
    state.todos = updatedTodo;
  },
  removeTodoFromTodos(state, id) {
    const updatedTodos = state.todos.filter((todo) => todo.id !== id);
    state.todos = updatedTodos;
  },
  saveAllTodosStatus(state, event) {
    const updatedTodos = state.todos.map((todo) => {
      return { ...todo, completed: event.target.checked };
    });
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
