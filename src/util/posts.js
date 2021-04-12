import axios from "axios";

export function getPosts(callback){
    axios.get("/api/posts")
    .then(response => {
        callback(undefined, response.data)
    })
    .catch(error => {
        callback(error, undefined)
    })
}