import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/'
})

export const addSong = (songData) => {
  api.post("/song", songData);
  console.log(songData);
}

export const getAllSongs = () => {
  const data = api.get("/song/all");
  return data;
}

export const getAllSongsData = () => {
  const data = api.get("/songdata/all");
  return data;
}

export const getSong = (filename) => {
  return api.get(`/song/${filename}`);
}

export const deleteSong = (id, filename) => {
  return api.delete(`/${id}/${filename}`);
}

const apis = {
  addSong,
  getAllSongs,
  getAllSongsData,
  getSong,
  deleteSong
}

export default apis;