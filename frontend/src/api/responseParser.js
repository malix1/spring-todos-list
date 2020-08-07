export const responseParser = (response) => {
  return response
/*     if (response.data.status === 200 || response.status === 200) {
      return { status: 200, data: response.data };
    } else if (response.data.status === 400) {
      const errors = errorHandler(response.data);
      return { status: 400, errors };
    } */
  };
  
  export const errorHandler = (errors) => {
/*     const parsedErrors = [];
    for (var error in errors) {
      parsedErrors.push(errors[error][0]);
    }
    return parsedErrors; */
    return errors
  };
  