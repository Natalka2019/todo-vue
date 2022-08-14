<template>
  <span>{{ props.todo.text }}</span>
  <div class="flex mt-2.5 sm:pl-2">
    <font-awesome-icon
      v-if="props.todo.completed"
      icon="times"
      class="i fas fa-times cursor-pointer text-stone-700 hover:text-red-500"
      :id="props.todo.id"
    />
    <font-awesome-icon
      v-if="!props.todo.completed"
      icon="check"
      class="i fas fa-check cursor-pointer text-stone-700 hover:text-green-500"
      :id="props.todo.id"
    />
    <font-awesome-icon
      icon="trash"
      class="i fas fa-trash cursor-pointer ml-2.5 text-stone-700 hover:text-red-500"
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
