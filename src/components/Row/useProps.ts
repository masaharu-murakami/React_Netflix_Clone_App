import { useEffect, useState } from "react";
import axios from "../../axios";
import { Movie } from "../../type";

// ②データの整形

export const useProps = (fetchUrl: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>("");

  // ①APIの取得はuseEffectを使う
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //console.log("取得したデータ:", request.data);
       // ②データの整形
      const movies = request.data.results.map((movie: Movie) => ({
        id: movie.id,
        name: movie.name,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
      }));
      setMovies(movies);
      //return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    }else {
      const moviePlayUrl = await axios.get(requests.fetchActionMoviesVideos(movie.id));
      setTrailerUrl(moviePlayUrl.data.results[0]?.key);
    };
  };

  return {
    movies,
    trailerUrl,
    handleClick,
  };
};