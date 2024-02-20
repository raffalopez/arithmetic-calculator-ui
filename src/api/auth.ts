import { defaultHeader } from "./api.helpers";

const BASE_URL = process.env.REACT_APP_API_URL;

export const auth = {
  UserLogin: async function (endpoint: string, user: any) {
    try {
      const response = await window.fetch(`${BASE_URL}/${endpoint}`, {
        method: "POST",
        headers: {
          ...defaultHeader,
        },
        body: JSON.stringify(user),
      });
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
  SignUp: async function (endpoint: string, user: any) {
    try {
      const response = await window.fetch(`${BASE_URL}/${endpoint}`, {
        method: "POST",
        headers: {
          ...defaultHeader,
        },
        body: JSON.stringify(user),
      });
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
};
