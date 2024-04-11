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

export const getEventsByPage = async (currentPage) => {
  const response = await axios.get(`${API_URL}/page?page=${currentPage}`);
  return response.data;
};

export const deleteEvent = async (eventId) => {
  return await axios.delete(`${API_URL}/admin/event/${eventId}`, {
    headers: authHeader(),
  });
};

export const addEvent = async (formData, headers) => {
  return await axios.post(`${API_URL}/admin/event`, formData, {
    headers: {
      ...headers,
      "Content-Type": "multipart/form-data",
    },
  });
};
