import React, { useEffect, useState } from "react";
import "./css/Row.css";
import axios from "../axios";

function Row(props) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData(params) {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  //   console.log(movies);
  return (
    <div className="row">
      <h2 className="row__movieName">{props.title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          if (
            (props.isLargeRow && movie.poster_path) ||
            (!props.isLargeRow && movie.backdrop_path)
          ) {
            return (
              <img
                className={`row__poster ${
                  props.isLargeRow && "row__posterLarge"
                }`}
                key={movie.id}
                src={`${base_url}${
                  props.isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            );
          } else {
            return "";
          }
        })}
      </div>
    </div>
  );
}

export default Row;
