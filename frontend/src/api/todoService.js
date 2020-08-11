import { postRequest, putRequest, getRequest } from "./requests";

export const getAllTodos = async () => {
  const token = window.$cookies.get("token");
  const headers = { Authorization: `Bearer ${token}` };
  const url = "http://127.0.0.1:8098/api/todos";
  const response = await getRequest(url, { headers });
  return response;
};

export const createTodo = async (todo) => {
  const token = window.$cookies.get("token");
  const headers = { Authorization: `Bearer ${token}` };
  const url = "http://127.0.0.1:8098/api/todos";
  const response = await postRequest(url, { todos: [todo] }, { headers });
  return response;
};

export const saveTodos = async (todos) => {
  const token = window.$cookies.get("token");
  const headers = { Authorization: `Bearer ${token}` };
  const url = "http://127.0.0.1:8098/api/todo";
  const response = await putRequest(url, todos, { headers });
  return response;
};
