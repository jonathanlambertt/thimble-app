import axios from "axios";
import Constants from "expo-constants";

const instance = axios.create({
  baseURL: Constants.manifest.extra.baseURL,
});

export default instance;
