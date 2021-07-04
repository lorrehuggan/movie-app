import React, { useState, useEffect } from 'react';
import axios from '../Utils/axios';
import './SideBarRight.scss';
import SideBarSearch from './SideBarSearch';
import SideBarSearchResults from './SideBarSearchResults';
import SideBarPopularMovies from './SideBarPopularMovies';
import SideBarFavorites from './SideBarFavorites';

function SideBar({ fetchUrl, fetchQuery }) {
  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [firstMov, setFirstMov] = useState(0);
  const [lastMov, setLastMov] = useState(5);
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

  let top3 = movies.slice(0, 3);
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
    <section className="sidebar__right">
      <div className="sidebar__right-container">
        <div className="sidebar__container">
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
            <React.Fragment>
              <div className="sidebar__popular">
                <div className="sidebar__header">
                  <h3>Popular Movies</h3>
                </div>

                <SideBarPopularMovies top3={top3} base_img_url={base_img_url} />
              </div>
              <div className="sidebar__popular">
                <div className="sidebar__header">
                  <h3>Favorites</h3>
                </div>

                <SideBarFavorites fav={fav} base_img_url={base_img_url} />
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </section>
  );
}

export default SideBar;
