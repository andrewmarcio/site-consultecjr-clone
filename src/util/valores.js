import axios from "axios";

export function getWorth(callback){
    axios.get('/api/valores')
    .then(response => {
        callback(undefined,response.data);
    })
    .catch(error => {
        callback(error, undefined)
    })
}