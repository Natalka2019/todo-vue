<template>
  <button
    class="cursor-pointer p-3 rounded disabled:bg-neutral-300 border-none disabled:border-none tracking-wider"
    @click="props.onClick"
    :type="props.type"
    :disabled="props.disabled"
  >
    {{ props.title }}
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  type: String,
  onClick: {
    type: Function,
    required: false,
  },
  disabled: Boolean,
});
</script>
