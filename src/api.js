import axios from "axios"

export const addMovie = (movie) => {
    return axios.post('http://localhost:7777/movie/add',
        movie, {
        headers: {
            'Content-type': 'application/json'
        }
    }).then(response => {
        if (response.status === 200) {
            return response
        }
    }).catch((error) => {
        return error;
    })
}
 
export const getMovies = () => {
    return axios.get('http://localhost:7777/movie/all').then(response => {
        if (response.status === 200) {
            return response
        }
    }).catch((error) => {
        return error;
    })
}