import TodosPage from "../views/Todos";
import HomePage from "../views/Home";
import LoginPage from "../views/Login";

export const userRoutes = [
  { path: "/", component: HomePage },
  { path: "/todos", component: TodosPage },
  { path: "/login", component: LoginPage },
];
