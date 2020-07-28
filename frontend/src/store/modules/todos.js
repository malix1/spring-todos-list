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
};

const mutations = {
  pushTodoToTodos(state, newTodo) {
    state.todos.push(newTodo);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
