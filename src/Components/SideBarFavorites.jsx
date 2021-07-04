import React from 'react';

function SideBarFavorites({ fav, base_img_url }) {
  return (
    <ul className="sidebar__popular-list">
      {fav.map((movie) => {
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

export default SideBarFavorites;
