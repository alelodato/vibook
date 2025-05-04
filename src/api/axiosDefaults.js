import axios from "axios";

axios.defaults.baseURL = "https://vibook-api-259e45270715.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;