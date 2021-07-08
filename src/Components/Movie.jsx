import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import './Movie.scss';

function Movie({ movie, isLargeRow, base_img_url, handleClick }) {
  let history = useHistory();
  let { url } = useRouteMatch();
  return (
    <div onClick={() => history.push(`show/${movie.id}`)} key={movie.id}>
      <div className="poster__img-container">
        <h2 className="poster__img-container__text">
          {isLargeRow ? '' : movie.name || movie.title}
        </h2>
        {!isLargeRow && <div className="poster__img-gradient"></div>}
        <img
          onClick={() => handleClick(movie)}
          className={isLargeRow ? 'row__poster' : 'row__poster-backdrop'}
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
}

export default Movie;
