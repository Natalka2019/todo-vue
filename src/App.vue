<template>
  <h1>ToDo List</h1>
  <div class="input-container">
    <inputRegular
      type="text"
      class="inputField"
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

  <div class="container" @click="onContainerClick">
    <span class="header">Tasks</span>
    <span class="header">Incomplete</span>
    <span class="header">Completed</span>
    <todoItems :todos="todos"></todoItems>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import buttonRegular from "./components/buttonRegular.vue";
import inputRegular from "./components/inputRegular.vue";
import todoItems from "./components/todoItems.vue";

export default {
  name: "App",
  components: {
    buttonRegular,
    inputRegular,
    todoItems,
  },
  data() {
    return {
      description: "",
      todos: [],
    };
  },
  mounted() {
    this.todos = this.readFromLocalStorage();
  },
  methods: {
    addButtonClick() {
      if (this.description !== "") {
        const newTodo = {
          id: uuidv4(),
          text: this.description,
          completed: false,
        };

        this.todos = [...this.todos, newTodo];

        this.description = "";

        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    },

    onContainerClick(e) {
      if (e.target.parentElement?.classList.contains("fa-trash")) {
        this.deleteTodo(e.target.parentElement?.id);
      }

      if (
        e.target.classList.contains("fa-times") ||
        e.target.parentElement?.classList.contains("fa-times") ||
        e.target.classList.contains("fa-check") ||
        e.target.parentElement?.classList.contains("fa-check")
      ) {
        this.toggleComplete(e.target.id || e.target.parentElement?.id);
      }
    },

    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);

      if (this.todos.length === 0) {
        localStorage.removeItem("todos");
        return;
      }

      localStorage.setItem("todos", JSON.stringify(this.todos));
    },

    toggleComplete(id) {
      this.todos = this.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );

      localStorage.setItem("todos", JSON.stringify(this.todos));
    },

    readFromLocalStorage() {
      const todos = localStorage.getItem("todos");
      return !todos ? [] : JSON.parse(todos);
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

@media (max-width: 370px) {
  body {
    padding: 0 5px;
  }
}
</style>
