import axios from "axios";
import { store } from "../store/index";

const local = "http://127.0.0.1:3333";
const websocket = "ws://localhost:3333/adonis-ws";

/** This API will connect to NodeJS Server */
const api = axios.create({
  baseURL: local,
});

api.interceptors.request.use((config) => {
  const { token } = store.getState().auth;
  const { active: provider } = store.getState().provider;
  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  if (provider) {
    headers.PROVIDER = provider.slug;
  }

  return { ...config, headers };
});
