export const responseParser = (response) => {
  return {
    status: response.status,
    message: response.data.message,
    data: response.data,
  };
};

/*
0: "config"
1: "request"
2: "response"
3: "isAxiosError"
4: "toJSON"
*/
export const errorHandler = (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        return { status: 401, message: "Username or password are wrong" };

      default:
        return { status: error.response.status, message: error.message };
    }
  }
  return { status: "", message: error.message };
};
