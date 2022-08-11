<template>
  <div class="container">
    <div className="signUp">
      <h1>SignUp</h1>
      <div className="inputsContainer">
        <inputRegular
          class="inputFieldContainer"
          inputFieldClass="inputField"
          label="hello"
          placeholder="Placeholder"
        />
        <buttonRegular
          @click="goToTodosPage"
          title="SignUp"
          class="signUpButton"
        />
      </div>
    </div>
  </div>
</template>

<script>
import buttonRegular from "../../components/buttonRegular.vue";
import inputRegular from "../../components/inputRegular.vue";

export default {
  name: "SignUpPage",
  components: {
    buttonRegular,
    inputRegular,
  },
  methods: {
    goToTodosPage() {
      this.$router.push("/todos");
    },
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
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
  margin-bottom: 19px;
  font-size: 13px;
  line-height: 20px;
}

::v-deep .inputField {
  height: 36px;
  padding: 8px 12px;
  background: #ffffff;
  border: 1px solid #cfd6de;
  border-radius: 4px;
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
