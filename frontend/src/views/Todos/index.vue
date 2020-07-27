<template>
  <div>
    Todos Page
    <div v-for="todo in todos" :key="todo.id"></div>
  </div>
</template>

<script>
export default {
  name: "Todos",
  data: function() {
    return {
      todos: [
        {
          id: 1,
          name: "Write kanji",
          isDone: false
        },
        {
          id: 2,
          name: "Study grammar",
          isDone: false
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
