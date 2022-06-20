import axios from "axios";

export const getApiUrl = (
  storage: Pick<Storage, "getItem"> = localStorage
): string => {
  if (process.env.NODE_ENV === "development") {
    const url = storage.getItem("api") ?? process.env.REACT_APP_API_URL;
    if (url) {
      return url;
    }
  }
  return "http://localhost:8000";
};

export const API = axios.create({
  baseURL: getApiUrl(),
});
