import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

const API_URL = "http://localhost:3000/api";

export const getEventsById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/event/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el evento:", error);
    throw error;
  }
};
