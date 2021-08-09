import React, { useState, useEffect } from 'react';

//Utils
import axios from '../../Utils/axios';

//Icons
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai';

//Components
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import Movie from '../MovieItem/Movie';

//Styles
import {
  Wrapper,
  GradientLeft,
  GradientRight,
  Header,
  Buttons,
  MovieContainer,
  ScrollButton,
} from './Row.styles';
import { Header3 } from '../FontAttr/type';

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
    <Wrapper justify="space-between" direction="row">
      <GradientRight></GradientRight>
      <GradientLeft></GradientLeft>

      <Header justify="space-between" direction="row">
        <Header3>{title}</Header3>
        <Buttons direction="row">
          <ScrollButton
            style={
              hideButton
                ? {
                    opacity: '0',
                    pointerEvents: 'none',
                    transition: 'opacity 0.5s ease',
                  }
                : {}
            }
            onClick={prevHandler}
            id="previous"
          >
            <AiFillCaretLeft />
          </ScrollButton>
          <ScrollButton onClick={nextHandler} id="next">
            <AiFillCaretRight />
          </ScrollButton>
        </Buttons>
      </Header>

      <MovieContainer style={translateX} className="row__posters">
        {movies.map((movie) => {
          return (
            <Movie
              movie={movie}
              isLargeRow={isLargeRow}
              handleClick={handleClick}
              base_img_url={base_img_url}
            />
          );
        })}
      </MovieContainer>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </Wrapper>
  );
}

export default Row;
