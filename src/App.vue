<template>
  <h1>ToDo List</h1>
  <div class="input-container">
    <inputRegular
      type="text"
      class="inputField"
      placeholder="add new task"
      required
    />
    <buttonRegular
      id="btn"
      title="Add Task"
      class="addButton"
      @click="addButtonClick"
    />
  </div>

  <div class="container">
    <span class="header">Tasks</span>
    <span class="header">Incomplete</span>
    <span class="header">Completed</span>
  </div>
</template>

<script>
import buttonRegular from "./components/buttonRegular.vue";
import inputRegular from "./components/inputRegular.vue";

export default {
  name: "App",
  components: {
    buttonRegular,
    inputRegular,
  },
  methods: {
    addButtonClick(event) {
      console.log(event);
      console.log("Button clicked");
    },
  },
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  padding: 0 20px;
}

h1 {
  text-align: center;
  border-bottom: 1px solid #999;
  padding: 0 0 15px 0;
}

.input-container {
  text-align: center;
  padding: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0.1px 0.1px 2px rgba(0, 0, 0, 0.4);
  margin: 0 0 20px 0;
}

.inputField {
  width: 60%;
}

.addButton {
  font-size: 1rem;
  background: blueviolet;
  color: #fff;
  width: 30%;
  box-shadow: 0.1px 0.1px 2px rgba(0, 0, 0, 0.4);
  font-weight: bold;
}

.container {
  box-shadow: 0.1px 0.1px 2px rgba(0, 0, 0, 0.4);
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 15px 15px;
  grid-auto-flow: dense;
}

.header {
  text-align: center;
  background: #eee;
  padding: 10px;
}

.header:first-of-type {
  grid-column: 1 / span 2;
}

@media (max-width: 380px) {
  .container {
    padding: 10px 10px;
  }

  .inputField,
  .addButton {
    width: 90%;
  }
}
</style>
