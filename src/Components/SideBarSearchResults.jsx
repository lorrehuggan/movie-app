import React from 'react';
import './SideBarSearchResults.scss';

function SideBarSearchResults({
  searchResults,
  base_img_url,
  prevPage,
  nextPage,
}) {
  return (
    <div className="sidebar__popular">
      <div style={{ marginBottom: '4rem' }} className="sidebar__header">
        <h3>Search Results...</h3>
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
      <div className="search__result-buttons">
        <button className="search__result-button" onClick={prevPage}>
          Prev
        </button>
        <button className="search__result-button" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default SideBarSearchResults;
