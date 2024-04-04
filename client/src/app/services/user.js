import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

const API_URL = process.env.API_URL;

export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user && !user.token) return { Authorization: "" };
  return {
    Authorization: "Bearer " + user.token,
  };
};

export const UserService = {
  getLogin: async (formData) => {
    return await axios.post(`${API_URL}/login`, {
      email: formData.email,
      password: formData.password,
    });
  },

  registerUser: async (formData) => {
    return await axios.post(`${API_URL}/register`, {
      ...formData,
    });
  },
};

export const EventsService = {
  getAllEvents: async () => {
    console.log(`${API_URL}/event`);
    return await axios.get(`${API_URL}/event`);
  },
};

export const ProfileService = {
  getUserById: async (id) => {
    console.log(`${API_URL}/profile/${id}`);
    return await axios.get(`${API_URL}/profile/${id}`, {
      headers: authHeader(),
    });
  },
};