import { helpers } from "@vuelidate/validators";

export const noDigits = helpers.regex(/^([^0-9]*)$/);

export const validEmail = helpers.regex(/(?=^.{1,64}@.{1,64}$)^(.+@.+\..+)$/);

export const validPassword = helpers.regex(
  /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,50}$/
);
