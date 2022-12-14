import { createRouter, createWebHistory } from "vue-router";
import TodosPage from "../views/TodosPage/TodosPage";
import SignUpPage from "../views/SignUpPage/SignUpPage";
import UsersPage from "../views/UsersPage/UsersPage";

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
  {
    path: "/users",
    name: "Users",
    component: UsersPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
