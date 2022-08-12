<template>
  <button class="button" @click="onClick" :type="type" :disabled="disabled">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "buttonRegular",
  props: {
    id: String,
    title: String,
    type: String,
    onClick: {
      type: Function,
      required: true,
    },
    disabled: Boolean,
  },
};
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
