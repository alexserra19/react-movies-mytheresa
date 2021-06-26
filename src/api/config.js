
const config = {
    routes: {
        getPopularMovies: "3/movie/popular?api_key={key}",
        getTopRatedMovies: "3/movie/top_rated?api_key={key}",
        getUpcomingMovies: "3/movie/upcoming?api_key={key}",
        getMovieDetails: "3/movie/{movie_id}?api_key={key}",
    }
}

export default config
