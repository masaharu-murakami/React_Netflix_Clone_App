const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
//const BASE_URL = "/discover/tv?api_key=";
const BASE_URL = "https://api.themoviedb.org/3/discover/tv?api_key=";

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&watch_region=JP&language=ja-JP`,
  fetchNetflixOriginals: `${BASE_URL}${API_KEY}&with_networks=213&watch_region=JP&language=ja`,
  fetchTopRated: `${BASE_URL}${API_KEY}&language=ja-JP`,
  fetchActionMovies: `${BASE_URL}${API_KEY}&with_genres=10759&watch_region=JP&language=ja-JP`,
  fetchNewsMovies: `${BASE_URL}${API_KEY}&with_genres=10763&watch_region=JP&language=ja-JP`,
  fetchKidsMovies: `${BASE_URL}${API_KEY}&with_genres=10762&watch_region=JP&language=ja-JP`,
  fetchRomanceMovies: `${BASE_URL}${API_KEY}&with_genres=10749&watch_region=JP&language=ja-JP`,
  fetchDocumentMovies: `${BASE_URL}${API_KEY}&with_genres=99&watch_region=JP&language=ja-JP`,

  fetchMovieVideos: (movieId: string) =>
    `/tv/${movieId}/videos?api_key=${API_KEY}`,
};

// type Request = {
//   title: string;
//   fetchUrl: string;
//   isLargeRow: boolean;
// };

// export const requests: Request[] = [
//   {
//     title: "Trending",
//     fetchUrl: `/trending/all/week?api_key=${API_KEY}&watch_region=JP&language=ja-JP`,
//     isLargeRow: false,
//   },
//   {
//     title: "Netflix Originals",
//     fetchUrl: `${BASE_URL}${API_KEY}&with_networks=213&watch_region=JP&language=ja`,
//     isLargeRow: true,
//   },
//   {
//     title: "Top Rated",
//     fetchUrl: `${BASE_URL}${API_KEY}&language=ja-JP`,
//     isLargeRow: false,
//   },
//   {
//     title: "Action Movies",
//     fetchUrl: `${BASE_URL}${API_KEY}&with_genres=10759&watch_region=JP&language=ja-JP`,
//     isLargeRow: false,
//   },
//   {
//     title: "News Movies",
//     fetchUrl: `${BASE_URL}${API_KEY}&with_genres=10763&watch_region=JP&language=ja-JP`,
//     isLargeRow: false,
//   },
//   {
//     title: "Kids Movies",
//     fetchUrl: `${BASE_URL}${API_KEY}&with_genres=10762&watch_region=JP&language=ja-JP`,
//     isLargeRow: false,
//   },
//   {
//     title: "Romance Movies",
//     fetchUrl: `${BASE_URL}${API_KEY}&with_genres=10749&watch_region=JP&language=ja-JP`,
//     isLargeRow: false,
//   },
//   {
//     title: "Document Movies",
//     fetchUrl: `${BASE_URL}${API_KEY}&with_genres=99&watch_region=JP&language=ja-JP`,
//     isLargeRow: false,
//   },
// ];