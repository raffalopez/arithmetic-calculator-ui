import { getItem } from "../helpers/localStorage";
import { defaultHeader } from "./api.helpers";

const BASE_URL = process.env.REACT_APP_API_URL;

export const record = {
  UserRecord: async function (endpoint: string) {
    try {
      const response = await window.fetch(`${BASE_URL}/${endpoint}`, {
        method: "GET",
        headers: {
          ...defaultHeader,
          Authorization: `Bearer ${getItem("token")}` || "",
        },
      });
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
  RemoveOperation: async function (endpoint: string) {
    try {
      const response = await window.fetch(`${BASE_URL}/${endpoint}`, {
        method: "DELETE",
        headers: {
          ...defaultHeader,
          Authorization: `Bearer ${getItem("token")}` || "",
        },
      });
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
};
