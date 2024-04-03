import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

const API_URL = process.env.API_URL;

const urlPreferences = "/preferences";

export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || !user.token) return {};
  return {
    Authorization: "Bearer " + user.token,
  };
};

export const createPreferences = async (testData) => {
  try {
    const response = await axios.post(`${API_URL}${urlPreferences}`, testData, {
      headers: authHeader(),
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPreferences = async () => {
  try {
    const response = await axios.get(`${API_URL}${urlPreferences}`, {
      headers: authHeader(),
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePreferences = async (preferencesData) => {
  try {
    const response = await axios.put(`${API_URL}${urlPreferences}`, preferencesData, {
      headers: authHeader(),
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  createPreferences,
  getPreferences,
  updatePreferences,
};
