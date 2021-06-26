import React, { useState, useEffect } from 'react';

import axios from '../Utils/axios';
import './Row.scss';

const base_img_url = 'https://image.tmdb.org/t/p/original';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <>
              <div className="poster__img-container">
                <h2 className="poster__img-container__text">
                  {isLargeRow ? '' : movie.name || movie.title}
                </h2>
                {!isLargeRow && <div className="poster__img-gradient"></div>}
                <img
                  className={
                    isLargeRow ? 'row__poster' : 'row__poster-backdrop'
                  }
                  src={`${base_img_url}${
                    isLargeRow
                      ? movie.poster_path
                      : movie.backdrop_path || movie.poster_path
                  }`}
                  alt={movie.name || movie.title}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
