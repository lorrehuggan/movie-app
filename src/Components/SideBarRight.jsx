import React, { useState, useEffect } from 'react';
import axios from '../Utils/axios';
import './SideBarRight.scss';
import { AiOutlineSearch } from 'react-icons/ai';

const base_img_url = 'https://image.tmdb.org/t/p/original';

function SideBar({ fetchUrl, fetchQuery }) {
  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  // fetch movie for popular movies and favourites
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // set sidebar movie list to only 3 movies

  let top3 = movies.slice(0, 3);
  let searchResults = searchedMovies.slice(0, 6);
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
      <div className="sidebar__left">
        <div className="sidebar__container">
          <div className="sidebar__search ">
            <form onSubmit={searchSubmit} action="search">
              <input
                onChange={searchHandler}
                type="text"
                placeholder="Search"
              />
              <button type="submit">
                <AiOutlineSearch />
              </button>
            </form>
          </div>
          {searchValue ? (
            <div className="sidebar__popular menu">
              <div className="sidebar__header">
                <h3>Search Results</h3>
              </div>

              <ul className="sidebar__popular-list">
                {searchResults.map((movie) => {
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
            </div>
          ) : (
            <React.Fragment>
              <div className="sidebar__popular menu">
                <div className="sidebar__header">
                  <h3>Popular Movies</h3>
                </div>

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
              </div>
              <div className="sidebar__popular menu">
                <div className="sidebar__header">
                  <h3>Favorites</h3>
                </div>

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
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </section>
  );
}

export default SideBar;
