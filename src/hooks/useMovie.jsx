import axios from "axios";

const movieApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_TOKEN}`
    }
})

const useMovie = () => {

  return movieApi
};

export default useMovie;