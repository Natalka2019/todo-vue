import { reactive, computed } from "vue";
import { useField } from "./field";

export const useForm = (init = {}) => {
  const form = reactive({});
  const validKey = "valid";

  for (const [key, value] of Object.entries(init)) {
    form[key] = useField(value);
  }

  form[validKey] = computed(() => {
    let status = true;
    Object.keys(form)
      .filter((key) => key !== validKey)
      .forEach((key) => {
        if (!form[key].valid) {
          status = false;
        }
      });

    return status;
  });

  return form;
};
