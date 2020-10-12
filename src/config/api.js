import axios from "axios";
import ApiKey from "./apiKey";

export default axios.create({
  baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=`,
});
