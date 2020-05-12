import axios from "axios";

const local = "http://127.0.0.1:3333";
const server = "https://fiberstreet.dktelecom.net.br";
const local01 = "http://127.0.0.1:3333/";

export const endPoint = false ? server : local;
export const endPointWs = false
  ? `wss://fiberstreet.dktelecom.net.br`
  : `ws://127.0.0.1:3333`;

/** This API will connect to NodeJS Server */
const api = axios.create({
  baseURL: endPoint,
});

/*
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
*/
