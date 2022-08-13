<template>
  <div
    v-for="todo in props.todos"
    v-bind:key="todo.id"
    :class="[todo.completed ? 'todo completed' : 'todo']"
  >
    <todoItem :todo="todo"></todoItem>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

import todoItem from "./todoItem.vue";

const props = defineProps({
  todos: Array,
});
</script>

<style scoped>
.todo {
  grid-column: 1 / span 1;
  padding: 15px 10px;
  border-radius: 5px;
  border-bottom: 3px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0.1px 0.1px 2px rgba(0, 0, 0, 0.4);
  animation: todo 0.3s ease;
}

.todo:hover {
  background-color: rgba(255, 0, 0, 0.3);
  color: red;
}

.todo:hover.completed {
  background-color: rgba(0, 255, 0, 0.3);
  color: green;
}

.todo.completed {
  grid-column: 2 / span 1;
  border-color: green;
}

.todo-actions {
  display: flex;
  padding: 0 0 0 7px;
}

@media (max-width: 370px) {
  .todo {
    flex-direction: column;
    justify-content: center;
  }

  .todo-actions {
    margin-top: 10px;
  }
}

@keyframes todo {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
