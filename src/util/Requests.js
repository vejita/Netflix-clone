// const { ApiKey } = require("../config/tmbdConfig.js");
const a = "5e6bf1da9afe9aae627b882d61d1eaa3";

exports.requests = {
  fetchTrending: `/trending/all/week?api_key=${a}&page=2&language=en=US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${a}&page=NO&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${a}&language=en=US`,
  fetchActionMovies: `/discover/movie?api_key=${a}&page=1&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${a}&page=2&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${a}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${a}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${a}&with_genres=99`,
  fetchNetflixOriginalsById: `/tv/ID?api_key=${a}&language=en-US`,
  fetchMoviesById: `/movie/ID?api_key=${a}&language=en-US`,
  fetchLatestTv2: `/tv/latest?api_key=${a}&language=en-US&with_networks=213&include_adult=true`,
  fetchLatestTv: `/tv/on_the_air?api_key=${a}&language=en-US&page=5`,
  fetchTrendingTV: `/trending/tv/week?api_key=${a}&language=en=US&with_networks=213&include_adult=true`,
  fetchPopularTV: `/tv/popular?api_key=${a}&language=en-US&page=2&with_networks=213&include_adult=true`,
  fetchPopularMovies: `/movie/popular?api_key=${a}&language=en-US&page=1&page=2&with_networks=213`,
  fetchMarvelMovies: `/search/movie?api_a}&language=en-US&query=marvels%20&page=1&include_adult=true`,
  fetchScienceFictionMovies: `/discover/movie?api_key=${a}&with_genres=878`,
};

// export default requests;
// https://api.themoviedb.org/3/trending/all/week?api_key=5e6bf1da9afe9aae627b882d61d1eaa3&language=en=US
