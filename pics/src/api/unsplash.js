import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 333616c0c9c8f5cffd411c18340117c9afc1a32f73c2fdceaedee4109459b4bd"
  }
});
