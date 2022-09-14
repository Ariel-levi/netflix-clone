const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
  fetchTrending: `/trending/all/day?api_key=${TMDB_API_KEY}&language=he`,
  fetchNetflixOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213&language=he`,
  fetchTopRated: `/movie/top_rated?api_key=${TMDB_API_KEY}&language=he`,
  fetchActionMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28&language=he`,
  fetchComedyMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35&language=he`,
  fetchHorrorMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27&language=he`,
  fetchRomanceMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749&language=he`,
  fetchDocumentaries: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=99&language=he`,
};

// Demo for the full Url

// https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=he

// https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213&language=he

export default requests;
