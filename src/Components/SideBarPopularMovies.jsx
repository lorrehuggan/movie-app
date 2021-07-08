import React from 'react';
import Movie from './Movie';
import './SideBarPopularMovies.scss';

function SideBarPopularMovies({ top3, base_img_url }) {
  return (
    <ul className="sidebar__popular-list">
      {top3.map((movie) => {
        return (
          <li key={movie.id + 2}>
            <img
              className="popular_movie-img"
              src={`${base_img_url}${movie.poster_path}
                      `}
              alt={movie.name || movie.title}
            />
            <p>{movie.name || movie.title}</p>
            <small>Rating {movie.vote_average} </small>
          </li>
        );
      })}
    </ul>
  );
}

export default SideBarPopularMovies;
