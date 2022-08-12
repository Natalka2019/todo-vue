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
      :type="type"
      @blur="$emit('blur', $event)"
      :maxlength="maxPasswordlength"
    />
    <p class="error" :class="inputFieldErrorClass">{{ error }}</p>
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
    inputFieldClass: [String, Array],
    inputFieldErrorClass: String,
    blur: Function,
    maxPasswordlength: String,
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

.error {
  margin: 0;
}
</style>
