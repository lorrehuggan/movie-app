import React, { useState, useEffect } from 'react';
import axios from '../Utils/axios';
import './SideBarRight.scss';
import { AiOutlineSearch } from 'react-icons/ai';

const base_img_url = 'https://image.tmdb.org/t/p/original';

function SideBar({ fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  let top3 = movies.slice(10, 13);
  let fav = movies.slice(16, 19);

  return (
    <section className="sidebar__right">
      <div className="sidebar__left">
        <div className="sidebar__container">
          <div className="sidebar__search ">
            <form action="search">
              <input type="text" placeholder="Search" />
              <button type="submit">
                <AiOutlineSearch />
              </button>
            </form>
          </div>
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
        </div>
      </div>
    </section>
  );
}

export default SideBar;
