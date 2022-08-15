<template>
  <div
    class="font-poppins max-w-full h-screen flex justify-center items-center sm:bg-[#f0f4f9]"
  >
    <div
      className="h-fit rounded-2xl sm:pr-10 sm:pl-10 sm:pb-10  sm:border-2 sm:border-[#e6ecf3] bg-white"
    >
      <h1 class="py-5 text-center text-4xl leading-[44px] font-medium">
        SignUp
      </h1>
      <form className="inputsContainer" @submit.prevent="submit">
        <inputRegular
          :class="inputFieldContainer"
          :inputFieldClass="[
            !form.firstName.valid && form.firstName.touched
              ? [activeClass, errorClass]
              : [activeClass, correctClass],
          ]"
          :inputFieldErrorClass="inputFieldErrorClass"
          label="First name"
          placeholder="Enter first name"
          v-model.trim="form.firstName.value"
          type="text"
          :error="form.firstName.touched ? errorMessage(form.firstName) : ''"
          @blur="form.firstName.blur"
        />
        <inputRegular
          :class="inputFieldContainer"
          :inputFieldClass="[
            !form.lastName.valid && form.lastName.touched
              ? [activeClass, errorClass]
              : [activeClass, correctClass],
          ]"
          :inputFieldErrorClass="inputFieldErrorClass"
          label="Last name"
          placeholder="Enter last name"
          v-model="form.lastName.value"
          type="text"
          :error="form.lastName.touched ? errorMessage(form.lastName) : ''"
          @blur="form.lastName.blur"
        />
        <inputRegular
          :class="inputFieldContainer"
          :inputFieldClass="[
            !form.email.valid && form.email.touched
              ? [activeClass, errorClass]
              : [activeClass, correctClass],
          ]"
          :inputFieldErrorClass="inputFieldErrorClass"
          label="Email"
          placeholder="Enter email"
          v-model="form.email.value"
          type="email"
          :error="form.email.touched ? errorMessage(form.email) : ''"
          @blur="form.email.blur"
        />
        <inputRegular
          :class="inputFieldContainer"
          :inputFieldClass="[
            !form.phone.valid && form.phone.touched
              ? [activeClass, errorClass]
              : [activeClass, correctClass],
          ]"
          :inputFieldErrorClass="inputFieldErrorClass"
          label="Phone number"
          placeholder="Enter phone number"
          v-model="form.phone.value"
          type="tel"
          :error="form.phone.touched ? errorMessage(form.phone) : ''"
          @blur="form.phone.blur"
        />
        <inputRegular
          :class="inputFieldContainer"
          :inputFieldClass="[
            !form.password.valid && form.password.touched
              ? [activeClass, errorClass]
              : [activeClass, correctClass],
          ]"
          :inputFieldErrorClass="inputFieldErrorClass"
          label="Password"
          placeholder="Enter password"
          v-model="form.password.value"
          type="password"
          maxPasswordlength="50"
          :error="form.password.touched ? errorMessage(form.password) : ''"
          @blur="form.password.blur"
        />
        <inputRegular
          :class="inputFieldContainer"
          :inputFieldClass="[
            !form.confirmPassword.valid && form.confirmPassword.touched
              ? [activeClass, errorClass]
              : [activeClass, correctClass],
          ]"
          :inputFieldErrorClass="inputFieldErrorClass"
          label="Confirm password"
          placeholder="Enter confirm password"
          v-model="form.confirmPassword.value"
          type="password"
          maxPasswordlength="50"
          :error="
            form.confirmPassword.touched
              ? errorMessage(form.confirmPassword)
              : ''
          "
          @blur="form.confirmPassword.blur"
          @input="validateConfirmPassword"
        />
        <buttonRegular
          @click="goToTodosPage(form)"
          title="SignUp"
          class="text-sm mt-7 font-medium leading-5 rounded border-2 py-3 px-5 w-60 sm:w-[400px] h-11 border-[#558fe6] bg-[#558fe6] text-white"
          type="submit"
          :disabled="!form.valid"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import buttonRegular from "../../components/buttonRegular.vue";
import inputRegular from "../../components/inputRegular.vue";
import { useForm } from "../../use/form";
import {
  required,
  minLength,
  maxLength,
  noDigits,
  validEmail,
  validPassword,
  validConfirmPassword,
} from "../../utilities";

const router = useRouter();

const activeClass = "h-9 py-2 px-3 bg-white rounded";
const correctClass = "border-2 border-[#cfd6de]";
const errorClass = "border-2 border-red-500";
const inputFieldContainer = "leading-4 mb-2 text-xs w-60 sm:w-[400px]";
const inputFieldErrorClass = "text-xs text-red-500";

const form = useForm({
  firstName: {
    name: "First name",
    value: "",
    validators: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(20),
      noDigits,
    },
  },
  lastName: {
    name: "Last name",
    value: "",
  },
  email: {
    name: "Email",
    value: "",
    validators: {
      validEmail,
    },
  },
  phone: {
    name: "Phone number",
    value: "",
  },
  password: {
    name: "Password",
    value: "",
    validators: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(50),
      validPassword,
    },
  },
  confirmPassword: {
    name: "Confirm password",
    value: "",
    validators: {
      required,
      validConfirmPassword,
    },
  },
});

const goToTodosPage = (form) => {
  console.log({
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    phone: form.phone.value,
  });
  router.push("/todos");
};

const validateConfirmPassword = () => {
  const isTheSamePassword =
    form.password?.value === form.confirmPassword?.value;

  form.confirmPassword.errors.validConfirmPassword.status = !isTheSamePassword;

  form.confirmPassword.valid =
    !form.confirmPassword.errors.required.status &&
    !form.confirmPassword.errors.validConfirmPassword.status;
};

const errorMessage = (field) => {
  if (field.valid) {
    return "";
  }

  if (field.errors.required?.status) {
    return `${field.name} is required`;
  } else if (field.errors.minLength?.status || field.errors.maxLength?.status) {
    return `${field.name} must be from ${field.errors.minLength.value} to ${field.errors.maxLength.value} characters`;
  } else if (field.errors.noDigits?.status) {
    return `${field.name} can not contain digits`;
  } else if (field.errors.validEmail?.status) {
    return "Email invalid";
  } else if (field.errors.validPassword?.status) {
    return "Invalid password. Should contain at least 1 upper-case letter and 1 digit, spaces are not allowed.";
  } else if (field.errors.validConfirmPassword?.status) {
    return "Passwords do not match";
  }
};
</script>
