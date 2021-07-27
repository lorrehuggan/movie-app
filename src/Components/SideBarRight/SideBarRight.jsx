import React, { useState, useEffect, useContext } from 'react';

// Axios
import axios from '../../Utils/axios';

//Components
import SideBarSearch from '../Search/SideBarSearch';
import SideBarSearchResults from '../SearchResults/SideBarSearchResults';
import SideBarPopularMovies from '../SideBarPopularMovies';
import SideBarFavorites from '../SideBarFav/SideBarFavorites.jsx';

//Styles
import {
  Wrapper,
  SideContainer,
  Popular,
  Header,
  MovieWrapper,
} from './SideBarRight.styles';
import { Header3, Paragraph } from '../FontAttr/type';

//SideBar Context
import { SideBarContext } from '../../Context/SideBarContext';

function SideBar({ fetchUrl, fetchQuery }) {
  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [firstMov, setFirstMov] = useState(0);
  const [lastMov, setLastMov] = useState(5);

  // use context

  const { openSideBar, setOpenSideBar } = useContext(SideBarContext);

  //base image url
  const base_img_url = 'https://image.tmdb.org/t/p/original';

  // fetch movie for popular movies and favourites
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //pagination logic

  const nextPage = () => {
    if (lastMov !== searchedMovies.length) {
      setFirstMov(firstMov + 5);
      setLastMov(lastMov + 5);
    } else {
      return;
    }
  };
  const prevPage = () => {
    if (firstMov !== 0) {
      setFirstMov(firstMov - 5);
      setLastMov(lastMov - 5);
    } else {
      return;
    }
  };

  // set sidebar movie list to only # of movies

  let top3 = movies.slice(6, 12);
  let searchResults = searchedMovies.slice(firstMov, lastMov);
  let fav = movies.slice(15, 18);

  // set search value to entered value

  const searchHandler = (e) => {
    setSearchedMovies([]);
    setSearchValue(e.target.value);
  };

  // fetch movies based on search

  const searchSubmit = (e) => {
    e.preventDefault();

    async function fetchData() {
      const request = await axios.get(fetchQuery + `&query=${searchValue}`);
      setSearchedMovies(request.data.results);
      return request;
    }
    fetchData();
  };

  return (
    <Wrapper>
      <SideContainer sidebar={openSideBar}>
        <SideBarSearch
          searchSubmit={searchSubmit}
          searchHandler={searchHandler}
        />
        {searchValue ? (
          <SideBarSearchResults
            searchResults={searchResults}
            base_img_url={base_img_url}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        ) : (
          <MovieWrapper>
            <Popular>
              <Header>
                <Paragraph>Popular Movies</Paragraph>
              </Header>

              <SideBarPopularMovies top3={top3} base_img_url={base_img_url} />
            </Popular>
            {/* <Popular>
              <Header className="sidebar__header">
                <Paragraph>Favorites</Paragraph>
              </Header>

              <SideBarFavorites fav={fav} base_img_url={base_img_url} />
            </Popular> */}
          </MovieWrapper>
        )}
      </SideContainer>
    </Wrapper>
  );
}

export default SideBar;
