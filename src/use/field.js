import { ref, reactive, watch } from "vue";

export function useField(field) {
  const valid = ref(true);

  const value = ref(field.value);

  const touched = ref(false);

  const name = ref(field.name);

  const errors = reactive({});

  const reassign = (val) => {
    valid.value = true;
    Object.keys(field.validators ?? {}).map((key) => {
      const isValid = field.validators[key](val);

      errors[key] = { status: !isValid.status, value: isValid.value };

      if (!isValid.status) {
        valid.value = false;
      }
    });
  };

  watch(value, reassign);

  reassign(field.value);

  return {
    name,
    value,
    valid,
    errors,
    touched,
    blur: () => (touched.value = true),
  };
}
