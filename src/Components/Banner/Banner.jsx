import React, { useEffect, useState } from 'react';

//API Request
import request from '../../Utils/request';
import axios from '../../Utils/axios';

//styles
import {
  Wrapper,
  Gradient,
  BannerContainer,
  Container,
  ButtonsContainer,
  BannerButton,
  Icon,
  Rating,
} from './Banner.styles';
import { Header2, Header3, Paragraph } from '../FontAttr/type';

//Icons
import { BsFillPlayFill } from 'react-icons/bs';
import { MdAdd } from 'react-icons/md';

function Banner() {
  const [movie, setMovie] = useState([]);
  const bannerImgPath = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  useEffect(() => {
    async function fetchData() {
      const requestFetch = await axios.get(request.fetchTrending);

      setMovie(
        requestFetch.data.results[
          Math.floor(Math.random() * requestFetch.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  return (
    <Wrapper bannerPath={bannerImgPath}>
      <Gradient />
      <Gradient bottom="10.8rem" direction="bottom" opacity="0.9" />
      <BannerContainer>
        <Container>
          <Header2 className="banner__heading">
            {movie.title || movie.name || movie.original_name}
          </Header2>
        </Container>
        <Container>
          <Paragraph align="right">{truncate(movie.overview, 180)}</Paragraph>
        </Container>
      </BannerContainer>
      <ButtonsContainer direction="row" justify="space-between">
        <BannerButton direction="row" justify="space-between">
          <Header3>Watch</Header3>
          <Icon>
            <BsFillPlayFill />
          </Icon>
        </BannerButton>
        <BannerButton direction="row" justify="space-between">
          <Header3>Rating</Header3>
          <Rating>{movie.vote_average}</Rating>
        </BannerButton>
        <BannerButton direction="row" justify="space-between">
          <Header3>Add </Header3>
          <Icon>
            <MdAdd />
          </Icon>
        </BannerButton>
      </ButtonsContainer>

      {/* <div className="banner__fade-bottom"></div>
      <div className="banner__fade-top"></div> */}
    </Wrapper>
  );
}

export default Banner;
