import React from 'react';

//Styles
import {
  Wrapper,
  ButtonContainer,
  List,
  Movies,
  MovieTitle,
  MovieRating,
  MovieImage,
} from './SideBarSearchResults.styles';
import { Header3 } from '../FontAttr/type';
import { Button } from '../Button/Button';

function SideBarSearchResults({
  searchResults,
  base_img_url,
  prevPage,
  nextPage,
}) {
  return (
    <Wrapper justify="space-between">
      <Header3>Search Results...</Header3>

      <List>
        {searchResults.map((movie) => {
          return (
            <Movies justify="space-between" key={movie.id + 2}>
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
      </List>
      <ButtonContainer direction="row" justify="space-between">
        <Button primary width="45%" onClick={prevPage}>
          Prev
        </Button>
        <Button primary width="45%" onClick={nextPage}>
          Next
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
}

export default SideBarSearchResults;
