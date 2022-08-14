<template>
  <div class="container">
    <div className="signUp">
      <h1>SignUp</h1>
      <form className="inputsContainer" @submit.prevent="submit">
        <inputRegular
          class="inputFieldContainer"
          :inputFieldClass="[
            !form.firstName.valid && form.firstName.touched ? errorClass : '',
            activeClass,
          ]"
          inputFieldErrorClass="inputFieldErrorClass"
          label="First name"
          placeholder="Enter first name"
          v-model.trim="form.firstName.value"
          type="text"
          :error="form.firstName.touched ? errorMessage(form.firstName) : ''"
          @blur="form.firstName.blur"
        />
        <inputRegular
          class="inputFieldContainer"
          :inputFieldClass="[
            !form.lastName.valid && form.lastName.touched ? errorClass : '',
            activeClass,
          ]"
          inputFieldErrorClass="inputFieldErrorClass"
          label="Last name"
          placeholder="Enter last name"
          v-model="form.lastName.value"
          type="text"
          :error="form.lastName.touched ? errorMessage(form.lastName) : ''"
          @blur="form.lastName.blur"
        />
        <inputRegular
          class="inputFieldContainer"
          :inputFieldClass="[
            !form.email.valid && form.email.touched ? errorClass : '',
            activeClass,
          ]"
          inputFieldErrorClass="inputFieldErrorClass"
          label="Email"
          placeholder="Enter email"
          v-model="form.email.value"
          type="email"
          :error="form.email.touched ? errorMessage(form.email) : ''"
          @blur="form.email.blur"
        />
        <inputRegular
          class="inputFieldContainer"
          :inputFieldClass="[
            !form.phone.valid && form.phone.touched ? errorClass : '',
            activeClass,
          ]"
          inputFieldErrorClass="inputFieldErrorClass"
          label="Phone number"
          placeholder="Enter phone number"
          v-model="form.phone.value"
          type="tel"
          :error="form.phone.touched ? errorMessage(form.phone) : ''"
          @blur="form.phone.blur"
        />
        <inputRegular
          class="inputFieldContainer"
          :inputFieldClass="[
            !form.password.valid && form.password.touched ? errorClass : '',
            activeClass,
          ]"
          inputFieldErrorClass="inputFieldErrorClass"
          label="Password"
          placeholder="Enter password"
          v-model="form.password.value"
          type="password"
          maxPasswordlength="50"
          :error="form.password.touched ? errorMessage(form.password) : ''"
          @blur="form.password.blur"
        />
        <inputRegular
          class="inputFieldContainer"
          :inputFieldClass="[
            !form.confirmPassword.valid && form.confirmPassword.touched
              ? errorClass
              : '',
            activeClass,
          ]"
          inputFieldErrorClass="inputFieldErrorClass"
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
          class="signUpButton"
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

const activeClass = "inputField";
const errorClass = "invalid";

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

<style scoped>
.container {
  height: 100vh;
  max-width: initial;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f4f9;
  font-family: "Poppins", sans-serif;
}

.signUp {
  background-color: #fff;
  border: 1px solid #e6ecf3;
  border-radius: 20px;
  padding: 0 40px 40px 40px;
}

h1 {
  text-align: center;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  padding: 20px 0 20px 0;
}

.inputFieldContainer {
  width: 400px;
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 20px;
}

.inputFieldContainer:last-of-type {
  margin-bottom: 30px;
}

::v-deep .inputField {
  height: 36px;
  padding: 8px 12px;
  background: #ffffff;
  border: 1px solid #cfd6de;
  border-radius: 4px;
}

::v-deep .invalid {
  border: 1px solid red;
}

::v-deep .inputFieldErrorClass {
  font-size: 12px;
  color: red;
}

.signUpButton {
  width: 400px;
  height: 44px;
  background: #558fe6;
  border: 1px solid #558fe6;
  border-radius: 4px;
  padding: 12px 20px;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;
}
</style>
