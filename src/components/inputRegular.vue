<template>
  <div class="inputContainer">
    <label v-if:="label" class="label">{{ props.label }}</label>
    <input
      class="input"
      :class="props.inputFieldClass"
      :placeholder="props.placeholder"
      :required="props.required"
      :value="props.modelValue"
      @input="updateValue"
      :type="props.type"
      @blur="emit('blur')"
      :maxlength="props.maxPasswordlength"
    />
    <p class="error" :class="props.inputFieldErrorClass">{{ props.error }}</p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
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
});

const emit = defineEmits(["update:modelValue", "blur"]);

const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
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
