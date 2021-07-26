import axios from 'axios';

export default class MovieService {
    getMovieByTitle({ title, type }, page = 1) {
        return axios.get(`https://www.omdbapi.com/?s=${title}&page=${page}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`)
        .then((res) => res.data)
        .catch((err) => console.error(err));
    }

    getMovieById(id) {
        return axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`)
            .then((res) => res.data)
            .catch((err) => console.error(err));
    }
}