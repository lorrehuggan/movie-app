import React from 'react';

//Styles
import {
  Favorites,
  Movies,
  MovieImage,
  MovieTitle,
  MovieRating,
} from './SideBarFavorites';

function SideBarFavorites({ fav, base_img_url }) {
  return (
    <Favorites justify="left">
      {fav.map((movie) => {
        return (
          <Movies key={movie.id + 2}>
            <MovieImage
              direction="row"
              justify="left"
              src={`${base_img_url}${movie.poster_path}
                      `}
              alt={movie.name || movie.title}
            />
            <MovieTitle>{movie.name || movie.title}</MovieTitle>
            <MovieRating>Rating {movie.vote_average} </MovieRating>
          </Movies>
        );
      })}
    </Favorites>
  );
}

export default SideBarFavorites;
