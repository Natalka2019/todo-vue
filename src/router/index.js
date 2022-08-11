import { createRouter, createWebHistory } from "vue-router";
import TodosPage from "../views/TodosPage";
import SignUpPage from "../views/SignUpPage";

const routes = [
  {
    path: "/",
    name: "SignUp",
    component: SignUpPage,
  },
  {
    path: "/todos",
    name: "Todos",
    component: TodosPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
