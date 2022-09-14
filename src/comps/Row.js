import React, { useEffect, useState } from "react";
import tmdbReq from "../utils/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "../css/row.css";

function Row(props) {
  const title = props.title;
  const fetchUrl = props.fetchUrl;
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await tmdbReq.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const movieClicked = (_movie) => {
    console.log(_movie);

    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(_movie?.original_title || _movie?.original_name || "")
        .then((url) => {
          //https://developers.google.com/watch?v=XXXXXXXX
          // new URL get => ?v=XXXXXXXX
          const urlParams = new URLSearchParams(new URL(url).search);
          // new URLSearchParams gwt => XXXXXXXX
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      <div className="row_posters">
        {/* container -> posters */}
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => {
                movieClicked(movie);
              }}
              className={`row_poster ${props.isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                props.isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
