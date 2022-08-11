<template>
  <div class="inputContainer">
    <label v-if:="label" class="label">{{ label }}</label>
    <input
      class="input"
      :class="inputFieldClass"
      :placeholder="placeholder"
      :required="required"
      :value="modelValue"
      @input="updateValue"
    />
    <p v-if:="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "inputRegular",
  props: {
    type: String,
    placeholder: String,
    required: Boolean,
    modelValue: String,
    label: String,
    error: String,
    inputFieldClass: String,
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.inputContainer {
  display: flex;
  flex-direction: column;
}

.label {
  margin-bottom: 8px;
}

.input {
  width: 100%;
  font-size: inherit;
  border: none;
  background: inherit;
  outline: none;
}
</style>
