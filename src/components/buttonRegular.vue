<template>
  <button class="button" @click="onClick">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "buttonRegular",
  props: {
    id: String,
    title: String,
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
.button {
  box-sizing: border-box;
  padding: 12px;
  margin: 0 0 15px 0;
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: inherit;
  letter-spacing: 0.8px;
  cursor: pointer;
}
</style>
