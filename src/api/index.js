import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/'
})

export const addSong = (musicData) => {
  api.post("/song", musicData);
}

export const getAllSong = () => {
  const data = api.get("/song/all");
  return data;
}

export const getSong = (id) => {
  return api.get(`/music/${id}`);
}

const apis = {
  addSong,
  getAllSong,
  getSong
}

export default apis;