import axios from "axios";

const key = "0ae018dc89a696513a6043d3ec6bfbe3";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const getTrendingMovies = async () => {
    const trendMovies = await axios.get(`trending/movie/week?api_key=${key}`);
    return trendMovies;
}

const getInfoAboutMovie = async (id) => {
    const moreInfo = await axios.get(`movie/${id}?api_key=${key}`);
    return moreInfo;
}

const searchMovie = async (query) => {
    const findedMovie = await axios.get(`search/movie?api_key=${key}&query=${query}`);
    return findedMovie;
}

const getReviews = async (id, page = 1) => {
    const review = await axios.get(`movie/${id}/reviews?api_key=${key}&page=${page}`);
    return review;
}

const getCast = async (id) => {
    const cast = await axios.get( `movie/${id}/credits?api_key=${key}`);
    return cast;
}

export {
    getTrendingMovies,
    getInfoAboutMovie,
    searchMovie,
    getReviews,
    getCast,
}