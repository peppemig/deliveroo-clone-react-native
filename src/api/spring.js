import axios from "axios";

export default axios.create({
    baseURL: "<ngrok_link>/api/v1"
})
