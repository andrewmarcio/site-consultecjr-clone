import axios from "axios";

export function getPortifolioData(callback){
    axios.get('/api/portifolio')
    .then(response => {
        callback(undefined, response.data)
    })
    .catch(error => {
        callback(error, undefined)
    })
}