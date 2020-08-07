import { postRequest, putRequest, getRequest } from "./requests";

export const getAllTodos = async () => {
  const url = "http://127.0.0.1:8098/api/todos";
  const response = await getRequest(url, { headers: {} });
  return response;
};

export const createTodo = async (todo) => {
  const url = "http://127.0.0.1:8098/api/todos";
  const response = await postRequest(url, todo, { headers: {} });
  return response;
};

export const saveTodos = async (todos) => {
  const url = "http://127.0.0.1:8098/api/todo";
  const response = await putRequest(url, todos, { headers: {} });
  return response;
};
