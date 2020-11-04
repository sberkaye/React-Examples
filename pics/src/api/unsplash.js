import axios from "axios";

const API_KEY = "xu0R1waxPFepszw9ckdudoIur4YnG7lo2QlpB-n-Tjk";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});
