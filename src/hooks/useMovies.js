import react from "react"
import { getMovie, getPopularMovies } from "../services/movies.service"

export function useMovies() {
    const [movies, setMovies] = react.useState([]);

    react.useEffect(() => {
        getPopularMovies().then(({data}) => {
            setMovies(data.results)
        })
    }, []);

    return movies;
}

export function useMovie(movieId) {
    const [movie, setMovie] = react.useState([]);

    react.useEffect(() => {
        getMovie(movieId).then(({data}) => {
            setMovie(data)
        })
    }, [movieId]);

    return movie;
}