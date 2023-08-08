import axios from "axios";
export const getApi = axios.create ({
baseURL : "https://hamburgueria-kenzie-json-serve.herokuapp.com/",
timeout: 8 * 1000,

})