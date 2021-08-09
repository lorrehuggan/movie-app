import React from 'react';
import { Image, List, Movie, Rating, Title } from './SideBarPopular.styles';

function SideBarPopularMovies({ top3, base_img_url }) {
  return (
    <List className="sidebar__popular-list">
      {top3.map((movie) => {
        return (
          <Movie
            direction="row"
            align="left"
            justify="space-between"
            key={movie.id + 2}
          >
            <Image
              className="popular_movie-img"
              src={`${base_img_url}${movie.poster_path}
                      `}
              alt={movie.name || movie.title}
            />
            <Title style={{ color: 'white' }}>
              {movie.name || movie.title}
            </Title>
            <Rating>Rating {movie.vote_average} </Rating>
          </Movie>
        );
      })}
    </List>
  );
}

export default SideBarPopularMovies;
