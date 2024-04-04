import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
const API_URL = process.env.API_URL;

export const getEventById = async (eventId) => {
  const response = await axios.get(`${API_URL}/event/${eventId}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  return response.data;
};

export const getAllEvents = async () => {
  console.log(`${API_URL}/event`);
  return await axios.get(`${API_URL}/event`);
};
