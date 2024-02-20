import { getItem } from "../helpers/localStorage";
import { defaultHeader } from "./api.helpers";

const BASE_URL = process.env.REACT_APP_API_URL;

export const newOperation = {
  NewOperation: async function (endpoint: string, operation: any) {
    try {
      const response = await window.fetch(`${BASE_URL}/${endpoint}`, {
        method: "POST",
        headers: {
          ...defaultHeader,
          Authorization: `Bearer ${getItem("token")}` || "",
        },
        body: JSON.stringify(operation),
      });

      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
};
