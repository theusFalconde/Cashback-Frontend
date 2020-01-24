import axios from "axios";
import { store } from "./../store";

export default function setup() {
  axios.interceptors.request.use(
    config => {
      let token = store.state.usuario.token;
      if (token) {
        config.headers.Authorization = `${token}`;
      }
      return config;
    },
    err => Promise.reject(err)
  );
  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error.response.data);
    }
  );
}
