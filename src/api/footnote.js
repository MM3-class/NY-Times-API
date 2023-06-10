import axios from "axios";

const URL = "https://api.nytimes.com/svc/mostpopular/v2/"
export default axios.create({
    baseURL: `${URL}`
})