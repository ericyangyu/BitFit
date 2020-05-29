import axios from 'axios';
import Constants from "expo-constants";

const { manifest } = Constants;

const api = axios.create({
    // DO NOT CHANGE (this is how we connect to local host; thank u stack overflow)
    baseURL: `http://${manifest.debuggerHost.split(':').shift()}:4200/apis/`
});

export default api;