<template>
  <div class="container">
    <div className="signUp">
      <h1>SignUp</h1>
      <pre>{{ form }}</pre>
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
          label="Last name"
          placeholder="Enter last name"
          v-model="form.lastName.value"
          type="text"
        />
        <inputRegular
          class="inputFieldContainer"
          :inputFieldClass="[
            !form.email.valid && form.email.touched ? errorClass : '',
            activeClass,
          ]"
          label="Email"
          placeholder="Enter email"
          v-model="form.email.value"
          type="email"
        />
        <inputRegular
          class="inputFieldContainer"
          :inputFieldClass="[
            !form.phone.valid && form.phone.touched ? errorClass : '',
            activeClass,
          ]"
          label="Phone number"
          placeholder="Enter phone number"
          v-model="form.phone.value"
          type="tel"
        />
        <inputRegular
          class="inputFieldContainer"
          :inputFieldClass="[
            !form.password.valid && form.password.touched ? errorClass : '',
            activeClass,
          ]"
          label="Password"
          placeholder="Enter password"
          v-model="form.password.value"
          type="password"
        />
        <inputRegular
          class="inputFieldContainer"
          :inputFieldClass="[
            !form.confirmPassword.valid && form.confirmPassword.touched
              ? errorClass
              : '',
            activeClass,
          ]"
          label="Confirm password"
          placeholder="Enter confirm password"
          v-model="form.confirmPassword.value"
          type="passowrd"
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

<script>
import buttonRegular from "../../components/buttonRegular.vue";
import inputRegular from "../../components/inputRegular.vue";
import { useForm } from "../../use/form";

const required = (val) => ({ status: !!val });
const minLength = (num) => (val) => ({
  status: val.length >= num,
  value: num,
});
const maxLength = (num) => (val) => ({
  status: val.length <= num,
  value: num,
});

const noDigits = (val) => {
  return { status: /^([^0-9]*)$/.test(val) };
};

export default {
  name: "SignUpPage",
  components: {
    buttonRegular,
    inputRegular,
  },
  data() {
    return {
      activeClass: "inputField",
      errorClass: "invalid",
    };
  },
  setup() {
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
        value: "",
      },
      email: {
        value: "",
      },
      phone: {
        value: "",
      },
      password: {
        value: "",
        validators: { required, minLength: minLength(8) },
      },
      confirmPassword: {
        value: "",
      },
    });

    return { form };
  },
  methods: {
    goToTodosPage(form) {
      console.log({
        firstName: form.firstName.value,
      });
      this.$router.push("/todos");
    },
    errorMessage(field) {
      if (field.valid) {
        return "";
      }

      if (field.errors.required.status) {
        return `${field.name} is required`;
      } else if (
        field.errors.minLength.status ||
        field.errors.maxLength.status
      ) {
        return `${field.name} must be from ${field.errors.minLength.value} to ${field.errors.maxLength.value} characters`;
      } else if (field.errors.noDigits.status) {
        return `${field.name} can not contain digits`;
      }
    },
  },
};
</script>

<style scoped>
.container {
  /* height: 100vh; */

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
}

.inputFieldContainer {
  width: 400px;
  margin-bottom: 4px;
  font-size: 13px;
  line-height: 20px;
}

.inputFieldContainer {
  width: 400px;
  margin-bottom: 4px;
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
  font-size: 10px;
  height: 15px;
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
