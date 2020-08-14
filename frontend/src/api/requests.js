import axios from "axios";
import { responseParser, errorHandler } from "./responseParser";

export const getRequest = async (url, config) => {
  try {
    const response = await axios.get(url, config);
    const parsedResponse = responseParser(response);
    return parsedResponse;
  } catch (error) {
    return errorHandler(error);
  }
};

export const postRequest = async (url, data, config) => {
  try {
    const response = await axios.post(url, data, config);
    const parsedResponse = responseParser(response);
    return parsedResponse;
  } catch (error) {
    return errorHandler(error);
  }
};

export const putRequest = async (url, data, config) => {
  try {
    const response = await axios.put(url, data, config);
    const parsedResponse = responseParser(response);
    return parsedResponse;
  } catch (error) {
    return errorHandler(error);
  }
};

export const deleteRequest = async (url, config) => {
  try {
    const response = await axios.delete(url, config);
    const parsedResponse = responseParser(response);
    return parsedResponse;
  } catch (error) {
    return errorHandler(error);
  }
};
