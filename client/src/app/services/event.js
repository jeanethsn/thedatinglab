import axios from "axios";
import { authHeader } from "./user.js";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
const API_URL = process.env.API_URL;

export const getEventById = async (eventId) => {
  const response = await axios.get(`${API_URL}/event/${eventId}`, {
    headers: authHeader(),
  });
  return response.data;
};

export const getAllEvents = async () => {
  return await axios.get(`${API_URL}/event`);
};
