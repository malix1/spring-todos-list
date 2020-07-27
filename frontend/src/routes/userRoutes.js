import TodosPage from "../views/Todos";
import HomePage from "../views/Home";

export const userRoutes = [
  { path: "/todos", component: TodosPage },
  { path: "/", component: HomePage },
];
