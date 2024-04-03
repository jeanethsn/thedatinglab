import axios from 'axios';


axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
const API_URL = process.env.API_URL;

export const EventService = {


  getEventById: (eventId) => {
    return axios.get(`${API_URL}/event/${eventId}`, headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },);
  },

};
