import axios from "axios";

const API_KEY = "AIzaSyB54YjR-R3_ZNh2PgIymM00ztU7ULPuhu8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: API_KEY,
  },
});
