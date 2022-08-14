<template>
  <div class="container font-montserrat p-5">
    <h1
      class="mb-5 text-center border-b-2 border-neutral-400 text-4xl font-extrabold"
    >
      ToDo List
    </h1>
    <div class="input-container">
      <inputRegular
        type="text"
        class="inputFieldContainer"
        inputFieldClass="inputField"
        placeholder="add new task"
        v-model="description"
        @keyup.enter="addButtonClick"
        required
      />
      <buttonRegular
        id="btn"
        title="Add Task"
        class="addButton"
        @click="addButtonClick"
      />
    </div>

    <div class="tasks-container" @click="onContainerClick">
      <span class="header">Tasks</span>
      <span class="header">Incomplete</span>
      <span class="header">Completed</span>
      <todoItems :todos="todos"></todoItems>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { v4 as uuidv4 } from "uuid";
import buttonRegular from "../../components/buttonRegular.vue";
import inputRegular from "../../components/inputRegular.vue";
import todoItems from "./components/todoItems.vue";

let description = ref("");
let todos = ref([]);

const readFromLocalStorage = () => {
  const todos = localStorage.getItem("todos");
  return !todos ? [] : JSON.parse(todos);
};

onMounted(() => {
  todos.value = readFromLocalStorage();
});

const addButtonClick = () => {
  if (description.value !== "") {
    const newTodo = {
      id: uuidv4(),
      text: description.value,
      completed: false,
    };

    todos.value = [...todos.value, newTodo];

    description.value = "";

    localStorage.setItem("todos", JSON.stringify(todos.value));
  }
};

const deleteTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);

  if (todos.value.length === 0) {
    localStorage.removeItem("todos");
    return;
  }

  localStorage.setItem("todos", JSON.stringify(todos.value));
};

const onContainerClick = (e) => {
  if (e.target.parentElement?.classList.contains("fa-trash")) {
    deleteTodo(e.target.parentElement?.id);
  }

  if (
    e.target.classList.contains("fa-times") ||
    e.target.parentElement?.classList.contains("fa-times") ||
    e.target.classList.contains("fa-check") ||
    e.target.parentElement?.classList.contains("fa-check")
  ) {
    toggleComplete(e.target.id || e.target.parentElement?.id);
  }
};

const toggleComplete = (id) => {
  todos.value = todos.value.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );

  localStorage.setItem("todos", JSON.stringify(todos.value));
};
</script>

<style scoped>
.input-container {
  text-align: center;
  padding: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0.1px 0.1px 2px rgba(0, 0, 0, 0.4);
  margin: 0 0 20px 0;
}

.inputFieldContainer {
  width: 60%;
  font-size: 1.1rem;
}

::v-deep .inputField {
  padding: 12px;
  margin: 0 0 15px 0;
  border-radius: 5px;
  background: #eee;
  box-shadow: 0.1px 0.1px 2px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.8px;
}

.inputField input {
  background: #eee;
}

.inputField:focus:invalid {
  border-bottom: 2px solid red;
}

.inputField:valid {
  border-bottom: 2px solid green;
}

.addButton {
  font-size: 1rem;
  background: blueviolet;
  color: #fff;
  width: 30%;
  box-shadow: 0.1px 0.1px 2px rgba(0, 0, 0, 0.4);
  font-weight: bold;
  margin: 0 0 15px 0;
}

.tasks-container {
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

@media (max-width: 370px) {
  body {
    padding: 0 5px;
  }
}
</style>
