import React, { useState, useEffect } from 'react';
import axios from '../Utils/axios';
import './Row.scss';
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_img_url = 'https://image.tmdb.org/t/p/original';

function Row({ title, fetchUrl, isLargeRow, isMovieRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
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

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

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
    } else if (translate === 0) {
      setTranslate(0);
      setHideButton(true);
    }
  }

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <div className="row__gradient-right"></div>
      <div className="row__gradient-left"></div>
      <div className="row__header">
        <h2 className="row__title">{title}</h2>
        <div className="row__scroll">
          <button
            onClick={prevHandler}
            className={hideButton ? 'display-none' : 'left__button'}
            id="previous"
          >
            <AiFillCaretLeft />
          </button>
          <button onClick={nextHandler} className="right__button" id="next">
            <AiFillCaretRight />
          </button>
        </div>
      </div>

      <div style={translateX} className="row__posters">
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <div className="poster__img-container">
                <h2 className="poster__img-container__text">
                  {isLargeRow ? '' : movie.name || movie.title}
                </h2>
                {!isLargeRow && <div className="poster__img-gradient"></div>}
                <img
                  onClick={() => handleClick(movie)}
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
            </div>
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
