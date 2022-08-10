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

  <div class="container">
    <span class="header">Tasks</span>
    <span class="header">Incomplete</span>
    <span class="header">Completed</span>
    <div
      v-for="todo in todos"
      v-bind:key="todo.id"
      :class="[todo.completed ? 'todo completed' : 'todo']"
    >
      <span>
        <span class="todo-id">{{ todo.id }}</span>
        <span>{{ todo.text }}</span>
      </span>
      <div class="todo-actions">
        <font-awesome-icon
          v-if="todo.completed"
          icon="times"
          class="i fas fa-times"
          @click="toggleComplete(todo.id)"
        />
        <font-awesome-icon
          v-if="!todo.completed"
          icon="check"
          class="i fas fa-check"
          @click="toggleComplete(todo.id)"
        />
        <font-awesome-icon
          icon="trash"
          class="i fas fa-trash"
          @click="deleteTodo(todo.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import buttonRegular from "./components/buttonRegular.vue";
import inputRegular from "./components/inputRegular.vue";

export default {
  name: "App",
  components: {
    buttonRegular,
    inputRegular,
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

    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);

      this.removeFromLocalStorage(id);
    },

    toggleComplete(id) {
      this.todos = this.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );

      localStorage.setItem("todos", JSON.stringify(this.todos));
    },

    removeFromLocalStorage(todoID) {
      let todos = this.readFromLocalStorage();
      todos = todos.filter((t) => t.id != todoID);

      if (todos.length === 0) {
        localStorage.removeItem("todos");
        return;
      }

      localStorage.setItem("todos", JSON.stringify(todos));
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

.i {
  cursor: pointer;
  color: #444;
}

.i.fa-trash {
  margin-left: 7px;
}

.i.fa-check:hover {
  color: green;
}

.i.fa-trash:hover,
.i.fa-times:hover {
  color: red;
}

.todo {
  grid-column: 1 / span 1;
  padding: 15px 10px;
  border-radius: 5px;
  border-bottom: 3px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0.1px 0.1px 2px rgba(0, 0, 0, 0.4);
  animation: todo 0.3s ease;
}

.todo:hover {
  background-color: rgba(255, 0, 0, 0.3);
  color: red;
}

.todo:hover.completed {
  background-color: rgba(0, 255, 0, 0.3);
  color: green;
}

.todo.completed {
  grid-column: 2 / span 1;
  border-color: green;
}

.todo-id {
  display: none;
}

.todo-actions {
  display: flex;
  padding: 0 0 0 7px;
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

  .todo {
    flex-direction: column;
    justify-content: center;
  }

  .todo-actions {
    margin-top: 10px;
  }
}

@keyframes todo {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
