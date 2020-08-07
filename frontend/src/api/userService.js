import { postRequest } from "./requests";

export const login = async (user) => {
  const url = "http://127.0.0.1:8098/api/auth/signin";
  const response = await postRequest(
    url,
    { username: user.username, password: user.password },
    { headers: {} }
  );
  return response;
};

export const logout = () => {
  window.$cookies.remove("token");
};

export const register = async (user) => {
  const { username, email, password, role } = user;
  const url = "http://127.0.0.1:8098/api/auth/signup";
  const response = await postRequest(
    url,
    {
      username,
      password,
      email,
      role,
    },
    { headers: {} }
  );
  return response;
};
