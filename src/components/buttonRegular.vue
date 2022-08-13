<template>
  <button
    class="button"
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
    required: true,
  },
  disabled: Boolean,
});
</script>

<style scoped>
.button {
  box-sizing: border-box;
  padding: 12px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: inherit;
  letter-spacing: 0.8px;
  cursor: pointer;
}

.button:disabled {
  background-color: rgb(163, 159, 159);
  border: none;
}
</style>
