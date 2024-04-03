import axios from 'axios';
import './axiosConfig'

const urlEvents = '/event';
const urlEventsAdmin = '/api/admin/event';
const baseURL = 'http://localhost:3000/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const EventService = {
  getAllEvents: () => {
    return axios.get(`${baseURL}${urlEvents}`);
  },

  getEvent: (eventId) => {
    return axios.get(`${urlEvents}/${eventId}`);
  },

  createEvent: (formData) => {
    return axios.post(urlEventsAdmin, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  updateEvent: (eventId, eventData) => {
    return axios.post(`${urlEventsAdmin}/${eventId}`, eventData, {
      headers: {
      'Content-Type': 'multipart/form-data',
      },
    });
  },

  destroyEvent: (eventId) => {
    return axios.delete(`${urlEventsAdmin}/${eventId}`);
  },

  confirmAttendance: (eventId) => {
    return axios.post(`${urlEvents}/attendance/${eventId}`);
  },

  getEventAttendees: (eventId) => {
    return axios.get(`${urlEvents}/attendance/${eventId}`);
  },

  getEventForUser: (id) => {
    return axios.get(`${urlEvents}/user/${id}`);
  },

};
