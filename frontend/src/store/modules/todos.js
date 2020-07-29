const state = () => ({
  todos: [
    {
      id: 1,
      title: "Write kanji",
      completed: false,
    },
    {
      id: 2,
      title: "Study grammar",
      completed: false,
    },
  ],
});

const getters = {
  getTodos: (state) => {
    return state.todos;
  },

  getBiggestId: (state) => {
    return state.todos.reduce(function(prev, current) {
      if (current.id > prev.id) {
        return current;
      } else {
        return prev;
      }
    }).id;
  },
  getRemaining: (state) => {
    return state.todos.filter((todo) => todo.completed === false).length;
  },
  getAnyRemaining: (state, getters) => {
    return getters.getRemaining != 0;
  },
};

const actions = {
  addTodo({ commit, getters }, todo) {
    if (todo.trim() !== "") {
      const biggestId = getters.getBiggestId;
      const newTodo = {
        id: biggestId + 1,
        title: todo,
        completed: false,
      };
      commit("pushTodoToTodos", newTodo);
    }
  },

  changeTodoStatus({ commit }, todo) {
    const changedTodo = { ...todo, completed: !todo.completed };
    commit("saveChangedTodoStatus", changedTodo);
  },

  removeTodo({ commit }, id) {
    commit("removeTodoFromTodos", id);
  },

  changeAllTodosStatus({ commit }, event) {
    commit("saveAllTodosStatus", event);
  },
};

const mutations = {
  pushTodoToTodos(state, newTodo) {
    state.todos.push(newTodo);
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
