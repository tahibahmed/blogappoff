import axios from "axios";
// import jwt_decode from "jwt-decode";

const token = localStorage?.getItem("authToken");

// if (token) {
//     const decoded = jwt_decode(token);
//     const currentTime = Date.now() / 1000;
//     if (decoded.exp < currentTime) {
//         window.localStorage.clear();
//         window.location.reload();
//     }
// }

const instance = axios.create({
    // baseURL: "https://bkd.17thkpjgames.com.my/superAdmin/",
    baseURL:"https://fair-pink-tadpole-boot.cyclic.app/adam/",
    // baseURL: "http://192.168.18.79:8080/superAdmin/",
    headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
        Authorization: `Bearer ${token}`,
    },
});

export default instance;
