const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getMenu = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data.bbqs;
};
