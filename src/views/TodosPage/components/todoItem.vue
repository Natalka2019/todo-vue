<template>
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
</template>

<script>
export default {
  name: "todoItem",
  props: {
    todo: Object,
  },
};
</script>

<style scoped>
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
</style>
