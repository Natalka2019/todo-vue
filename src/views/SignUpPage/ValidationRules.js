import { reactive, computed } from "vue";
import * as constants from "../../constants";
import * as regEx from "../../regEx";
import {
  helpers,
  required,
  minLength,
  maxLength,
  sameAs,
} from "@vuelidate/validators";

export const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
});

const firstNameLengthValidationMessage = `First name mast be from ${constants.MINIMAL_FIRST_NAME_LENGTH} to ${constants.MAXIMUM_FIRST_NAME_LENGTH} characters.`;
const PasswordLengthValidationMessage = `Password mast be from ${constants.MINIMAL_PASSWORD_LENGTH} to ${constants.MAXIMUM_PASSWORD_LENGTH} characters.`;

export const rules = computed(() => {
  return {
    firstName: {
      required: helpers.withMessage("First name is required.", required),
      noDigits: helpers.withMessage(
        "First name can not contain digits.",
        regEx.noDigits
      ),
      minLength: helpers.withMessage(
        firstNameLengthValidationMessage,
        minLength(constants.MINIMAL_FIRST_NAME_LENGTH)
      ),
      maxLength: helpers.withMessage(
        firstNameLengthValidationMessage,
        maxLength(constants.MAXIMUM_FIRST_NAME_LENGTH)
      ),
    },
    lastName: {},
    email: {
      required: helpers.withMessage("Email is required.", required),
      validEmail: helpers.withMessage("Email invalid.", regEx.validEmail),
    },
    phone: {},
    password: {
      required: helpers.withMessage("Password is required.", required),
      minLength: helpers.withMessage(
        PasswordLengthValidationMessage,
        minLength(constants.MINIMAL_PASSWORD_LENGTH)
      ),
      maxLength: helpers.withMessage(
        PasswordLengthValidationMessage,
        maxLength(constants.MAXIMUM_PASSWORD_LENGTH)
      ),
      validPassword: helpers.withMessage(
        "Invalid password. Should contain at least 1 upper-case letter and 1 digit, spaces are not allowed.",
        regEx.validPassword
      ),
    },
    confirmPassword: {
      required: helpers.withMessage("Confirm password is required.", required),
      sameAs: helpers.withMessage(
        "Passwords do not match.",
        sameAs(form.password)
      ),
    },
  };
});
