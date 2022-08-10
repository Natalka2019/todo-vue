<template>
  <input
    class="input"
    :placeholder="placeholder"
    :required="required"
    :value="taskDescription"
  />
</template>

<script>
export default {
  name: "inputRegular",
  props: {
    type: String,
    placeholder: String,
    required: Boolean,
  },
};
</script>

<style scoped>
.input {
  box-sizing: border-box;
  padding: 12px;
  font-size: 1.1rem;
  margin: 0 0 15px 0;
  border-radius: 5px;
  border: none;
  background: #eee;
  outline: none;
  box-shadow: 0.1px 0.1px 2px rgba(0, 0, 0, 0.3);
  font-family: inherit;
  letter-spacing: 0.8px;
}

.input:focus:invalid {
  border-bottom: 2px solid red;
}

.input:valid {
  border-bottom: 2px solid green;
}
</style>
