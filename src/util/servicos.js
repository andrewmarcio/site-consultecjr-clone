import axios from "axios";

export function getServices(callback){
    axios.get('/api/servicos')
    .then(response => {
        callback(undefined,response.data);
    })
    .catch(error => {
        callback(error, undefined)
    })
}