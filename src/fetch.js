import axios from "axios";

const api = axios.create({
  baseURL: 'https://streaming-availability.p.rapidapi.com/search/basic',
})

export default api;