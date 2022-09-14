import axios from "axios";

const tmdbReq = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default tmdbReq;
