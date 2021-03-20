import axios from "axios";

export default function getUserList() {
    return axios.get("https://randomuser.me/api/?results=4")
}