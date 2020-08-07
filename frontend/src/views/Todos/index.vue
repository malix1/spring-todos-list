<template>
  <div class="container">
    <input
      type="text"
      class="todo-input"
      placeholder="What needs to be done"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <transition-group
      name="fade"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown"
    >
      <div v-for="(todo) in todos" :key="todo.id" class="todo-item">
        <div class="todo-item-left">
          <input type="checkbox" :checked="todo.completed" @change="changeStatus(todo)" />
          <div
            v-if="!todo.editing"
            @dblclick="editTodo(todo)"
            class="todo-item-label"
            :class="{ completed : todo.completed }"
          >{{ todo.title }}</div>
          <input
            v-else
            class="todo-item-edit"
            type="text"
            v-model="todo.title"
            @blur="doneEdit(todo)"
            @keyup.enter="doneEdit(todo)"
            @keyup.esc="cancelEdit(todo)"
            v-focus
          />
        </div>
        <div class="remove-item" @click="removeTodo(todo.id)">&times;</div>
      </div>
    </transition-group>

    <div class="extra-container">
      <div>
        <label>
          <input type="checkbox" :checked="!anyRemaining" @change="changeAllTodosStatus" /> Check All
        </label>
      </div>
      <div>{{ remaining }} items left</div>
    </div>

    <div class="extra-container">
      <button @click="getTodos">Get Todo</button>
      <!--   <div>
        <button :class="{ active: filter == 'all' }" @click="filter = 'all'">All</button>
        <button :class="{ active: filter == 'active' }" @click="filter = 'active'">Active</button>
        <button :class="{ active: filter == 'completed' }" @click="filter = 'completed'">Completed</button>
      </div>-->

      <div>
        <!--  <transition name="fade">
          <button v-if="showClearCompletedButton" @click="clearCompleted">Clear Completed</button>
        </transition>-->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { getAllTodos } from "../../api/todoService";
export default {
  name: "Todos",
  data: function() {
    return {
      newTodo: "",
      beforeEditCache: "",
      filter: "all"
    };
  },
  mounted() {
    this.feetchTodos();
  },
  computed: mapGetters({
    todos: "todos/getTodos",
    remaining: "todos/getRemaining",
    anyRemaining: "todos/getAnyRemaining"
  }),
  methods: {
    addTodo() {
      this.addTodoAction(this.newTodo);
      this.newTodo = "";
    },
    async getTodos() {
      const res = await getAllTodos();
      console.log(res);
    },
    changeStatus(todo) {
      this.changeTodoStatus(todo);
    },
    changeAllTodosStatus(event) {
      this.saveAllTodosStatus(event);
    },
    ...mapActions({
      feetchTodos: "todos/fetchTodos",
      addTodoAction: "todos/addTodo",
      changeTodoStatus: "todos/changeTodoStatus",
      removeTodo: "todos/removeTodo",
      saveAllTodosStatus: "todos/changeAllTodosStatus"
    })
  }
};
</script>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");
.container {
  max-width: 60%;
  margin: 5% auto;
}

.todo-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;
  &:focus {
    outline: 0;
  }
}
.todo-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation-duration: 0.3s;
}
.remove-item {
  cursor: pointer;
  margin-left: 14px;
  &:hover {
    color: black;
  }
}
.todo-item-left {
  // later
  display: flex;
  align-items: center;
}
.todo-item-label {
  padding: 10px;
  border: 1px solid white;
  margin-left: 12px;
}
.todo-item-edit {
  font-size: 24px;
  color: #2c3e50;
  margin-left: 12px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc; //override defaults
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  &:focus {
    outline: none;
  }
}
.completed {
  text-decoration: line-through;
  color: grey;
}
.extra-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-top: 1px solid lightgrey;
  padding-top: 14px;
  margin-bottom: 14px;
}
button {
  font-size: 14px;
  background-color: white;
  appearance: none;
  &:hover {
    background: lightgreen;
  }
  &:focus {
    outline: none;
  }
}
.active {
  background: lightgreen;
}
// CSS Transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
