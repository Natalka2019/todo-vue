<template>
  <div class="flex flex-col">
    <label v-if:="label" class="mb-2">{{ props.label }}</label>
    <input
      :class="props.inputFieldClass"
      :placeholder="props.placeholder"
      :required="props.required"
      :value="props.modelValue"
      @input="updateValue"
      :type="props.type"
      @blur="emit('blur')"
      :maxlength="props.maxPasswordlength"
    />
    <div>
      <span
        :class="props.inputFieldErrorClass"
        v-for="error in errors"
        :key="error.$uid"
      >
        {{ error.$message + " " }}
      </span>
    </div>
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
  errors: Array,
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
