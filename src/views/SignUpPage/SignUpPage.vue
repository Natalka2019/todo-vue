<template>
  <div
    class="font-poppins max-w-full h-screen flex justify-center items-center sm:bg-lightBlue"
  >
    <div
      class="h-fit rounded-2xl sm:pr-10 sm:pl-10 sm:pb-10 sm:border-2 sm:border-grey bg-white"
    >
      <h1 class="py-5 text-center text-4xl leading-[44px] font-medium">
        SignUp
      </h1>
      <form @submit.prevent="submit">
        <inputRegular
          :class="inputFieldContainer"
          :inputFieldClass="[
            v$.firstName.$errors.length > 0
              ? [activeClass, errorClass]
              : [activeClass, correctClass],
          ]"
          :inputFieldErrorClass="inputFieldErrorClass"
          label="*First name"
          placeholder="Enter first name"
          v-model.trim="form.firstName"
          type="text"
          :errors="v$.firstName.$errors"
          @blur="v$.firstName.$touch()"
        />
        <inputRegular
          :class="inputFieldContainer"
          :inputFieldClass="[
            v$.lastName.$errors.length > 0
              ? [activeClass, errorClass]
              : [activeClass, correctClass],
          ]"
          :inputFieldErrorClass="inputFieldErrorClass"
          label="Last name"
          placeholder="Enter last name"
          v-model="form.lastName"
          type="text"
          :errors="v$.lastName.$errors"
          @blur="v$.lastName.$touch()"
        />
        <inputRegular
          :class="inputFieldContainer"
          :inputFieldClass="[
            v$.email.$errors.length > 0
              ? [activeClass, errorClass]
              : [activeClass, correctClass],
          ]"
          :inputFieldErrorClass="inputFieldErrorClass"
          label="*Email"
          placeholder="Enter email"
          v-model="form.email"
          type="email"
          :errors="v$.email.$errors"
          @blur="v$.email.$touch()"
        />
        <inputRegular
          :class="inputFieldContainer"
          :inputFieldClass="[
            v$.phone.$errors.length > 0
              ? [activeClass, errorClass]
              : [activeClass, correctClass],
          ]"
          :inputFieldErrorClass="inputFieldErrorClass"
          label="Phone number"
          placeholder="Enter phone number"
          v-model="form.phone"
          type="tel"
          :errors="v$.phone.$errors"
          @blur="v$.phone.$touch()"
        />
        <inputRegular
          :class="inputFieldContainer"
          :inputFieldClass="[
            v$.password.$errors.length > 0
              ? [activeClass, errorClass]
              : [activeClass, correctClass],
          ]"
          :inputFieldErrorClass="inputFieldErrorClass"
          label="*Password"
          placeholder="Enter password"
          v-model="form.password"
          type="password"
          maxPasswordlength="50"
          :errors="v$.password.$errors"
          @blur="v$.password.$touch()"
        />
        <inputRegular
          :class="inputFieldContainer"
          :inputFieldClass="[
            v$.confirmPassword.$errors.length > 0
              ? [activeClass, errorClass]
              : [activeClass, correctClass],
          ]"
          :inputFieldErrorClass="inputFieldErrorClass"
          label="*Confirm password"
          placeholder="Enter confirm password"
          v-model="form.confirmPassword"
          type="password"
          maxPasswordlength="50"
          :error="
            form.confirmPassword.touched
              ? errorMessage(form.confirmPassword)
              : ''
          "
          :errors="v$.confirmPassword.$errors"
          @blur="v$.confirmPassword.$touch()"
        />
        <buttonRegular
          title="SignUp"
          class="text-sm mt-7 font-medium leading-5 rounded border-2 py-3 px-5 w-60 sm:w-[400px] h-11 border-blue bg-blue text-white"
          type="submit"
          :disabled="v$.$invalid"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { form, rules } from "./ValidationRules";
import buttonRegular from "../../components/buttonRegular.vue";
import inputRegular from "../../components/inputRegular.vue";

const router = useRouter();

const activeClass = "h-9 py-2 px-3 bg-white rounded";
const correctClass = "border-2 border-lightGrey";
const errorClass = "border-2 border-red-500";
const inputFieldContainer = "leading-4 mb-2 text-xs w-60 sm:w-[400px]";
const inputFieldErrorClass = "text-xs text-red-500";

const v$ = useVuelidate(rules, form);

const submit = async () => {
  const result = await v$.value.$validate();

  if (result) {
    console.log(result);
    console.log(form);
    router.push("/todos");
  } else {
    console.log("Not submited");
    console.log(result);
  }
};
</script>
