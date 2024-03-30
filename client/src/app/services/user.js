import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

const API_URL = process.env.API_URL;

export const getLogin = async (formData) => {
  const response = await axios.post(`${API_URL}/login`, {
    email: formData.email,
    password: formData.password,
  });
  return response.data;
};
