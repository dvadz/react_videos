import axios from "axios";

const KEY = "AIzaSyB6zkxJoh8OnMrjoxeETBOgBk-8D9N0EWw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
