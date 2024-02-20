export const getItem = (key: string): any => {
  return JSON.parse(localStorage.getItem(key)!);
};

export const setItems = (key: string, data: any) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

export const removeItem = (key: string): any => {
  return JSON.parse(localStorage.getItem(key)!);
};
