<template>
  <div
    v-for="todo in props.todos"
    v-bind:key="todo.id"
    :class="[todo.completed ? [todoStyle, completed] : todoStyle]"
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

const todoStyle =
  "col-start-1 col-span-1 py-3.5 px-2.5 rounded border-b-2 border-red-500 shadow scale-100 ease delay-3000 hover:text-red-500 hover:bg-red-200 flex flex-col items-center sm:flex-row sm:justify-between sm:align-center";
const completed =
  "col-start-2 col-span-1 border-b-2 border-green-500 hover:text-green-500 hover:bg-green-200";
</script>
