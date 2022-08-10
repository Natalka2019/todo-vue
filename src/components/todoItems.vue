<template>
  <div
    v-for="todo in todos"
    v-bind:key="todo.id"
    :class="[todo.completed ? 'todo completed' : 'todo']"
    :id="todo.id"
  >
    <span>{{ todo.text }}</span>
    <div class="todo-actions">
      <font-awesome-icon
        v-if="todo.completed"
        icon="times"
        class="i fas fa-times"
        :id="todo.id"
      />
      <font-awesome-icon
        v-if="!todo.completed"
        icon="check"
        class="i fas fa-check"
        :id="todo.id"
      />
      <font-awesome-icon icon="trash" class="i fas fa-trash" :id="todo.id" />
    </div>
  </div>
</template>

<script>
export default {
  name: "todoItems",
  props: {
    todos: Array,
  },
};
</script>

<style>
.i {
  cursor: pointer;
  color: #444;
}

.i.fa-trash {
  margin-left: 10px;
}

.i.fa-check:hover {
  color: green;
}

.i.fa-trash:hover,
.i.fa-times:hover {
  color: red;
}

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
