import React, { useEffect, useState } from "react";
import tmdbReq from "../utils/axios";
import requests from "../utils/requests";
import "../css/banner.css";

function Banner(props) {
  const [movie, setMovie] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await tmdbReq.get(requests.fetchNetflixOriginals);
      // get random movie
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('${base_url}${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* title */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* div > 2 buttons */}
        <div className="banner_buttons">
          <button className="banner_button">נגן</button>
          <button className="banner_button">הוסף לרשימה</button>
        </div>

        {/* description */}
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>

      {/* fade Bottom */}
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
