import axios from "axios";
import { responseParser } from "./responseParser";

export const getRequest = async (url, config) => {
  const response = await axios.get(url, config);
  const parsedResponse = responseParser(response);
  return parsedResponse;
};

export const postRequest = async (url, data, config) => {
  const response = await axios.post(url, data, config);
  const parsedResponse = responseParser(response);
  return parsedResponse;
};
