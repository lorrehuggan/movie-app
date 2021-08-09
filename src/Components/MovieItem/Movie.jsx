import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { MovieContainer, MovieImage, MovieText, Wrapper } from './Movie.styles';

function Movie({ movie, isLargeRow, base_img_url, handleClick }) {
  let history = useHistory();
  let { url } = useRouteMatch();
  return (
    <Wrapper onClick={() => history.push(`show/${movie.id}`)} key={movie.id}>
      <MovieContainer>
        <MovieImage
          onClick={() => handleClick(movie)}
          src={`${base_img_url}${movie.poster_path}`}
          alt={movie.name || movie.title}
        />
      </MovieContainer>
    </Wrapper>
  );
}

export default Movie;
