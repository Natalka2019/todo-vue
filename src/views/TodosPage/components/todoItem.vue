<template>
  <span>{{ props.todo.text }}</span>
  <div class="todo-actions">
    <font-awesome-icon
      v-if="props.todo.completed"
      icon="times"
      class="i fas fa-times"
      :id="props.todo.id"
    />
    <font-awesome-icon
      v-if="!props.todo.completed"
      icon="check"
      class="i fas fa-check"
      :id="props.todo.id"
    />
    <font-awesome-icon
      icon="trash"
      class="i fas fa-trash"
      :id="props.todo.id"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  todo: Object,
});
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
