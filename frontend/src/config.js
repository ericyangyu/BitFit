import axios from 'axios';
import Constants from "expo-constants";

const { manifest } = Constants;

const api = axios.create({
  baseURL: `http://${manifest.debuggerHost.split(':').shift()}:4200/apis/`
});

export default api;