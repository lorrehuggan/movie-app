import React, { useState, useEffect } from 'react';
import axios from '../Utils/axios';
import './Row.scss';

const base_img_url = 'https://image.tmdb.org/t/p/original';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [translate, setTranslate] = useState(0);
  const [number, setNumber] = useState(0);
  const [hideButton, setHideButton] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  let length = movies.length;

  let translateX = { transform: `translateX(${translate}px)` };

  function nextHandler() {
    setNumber(number + 2);
    if (length === number + 4) {
      setTranslate(0);
      setNumber(0);
      setHideButton(true);
    } else {
      setTranslate(translate - 600);
      setHideButton(false);
    }
  }

  function prevHandler() {
    if (translate !== 0) {
      setTranslate(translate + 600);
      setHideButton(false);
    } else {
      setTranslate(0);
      setHideButton(true);
    }
  }

  return (
    <div className="row">
      <div className="row__header">
        <h2 className="row__title">{title}</h2>
        <div className="row__scroll">
          <button
            onClick={prevHandler}
            className={hideButton ? 'display-none' : 'left__button'}
            id="previous"
          >
            left
          </button>
          <button onClick={nextHandler} className="right__button" id="next">
            right
          </button>
        </div>
      </div>

      <div style={translateX} className="row__posters">
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
