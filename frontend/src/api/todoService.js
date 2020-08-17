import { postRequest, getRequest, deleteRequest } from "./requests";

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

export const updateTodos = async (todos) => {
  const token = window.$cookies.get("token");
  const headers = { Authorization: `Bearer ${token}` };
  const url = "http://127.0.0.1:8098/api/todos";
  const response = await postRequest(url, { todos }, { headers });
  return response;
};

export const removeTodo = async (id) => {
  const token = window.$cookies.get("token");
  const headers = { Authorization: `Bearer ${token}` };
  const url = `http://127.0.0.1:8098/api/todos/${id}`;
  const response = await deleteRequest(url, { headers });
  return response;
};
