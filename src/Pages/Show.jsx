import React, { useEffect, useState } from 'react';
import './Show.scss';
import Nav from '../Components/Nav/Nav';
import axios from '../Utils/axios';
import { API_KEY } from '../Utils/request';

function Show({ match }) {
  let { id } = match.params;
  let [movieDetails, setMovieDetails] = useState('');
  let [movieGenres, setMovieGenres] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      setMovieDetails(request.data);
      console.log(request.data);
      return request;
    }
    fetchData();
  }, [id, setMovieDetails]);

  if (!movieDetails) {
    return <div>Error</div>;
  }

  let {
    tagline,
    backdrop_path,
    original_title,
    overview,
    title,
    genres,
    runtime,
    vote_average,
  } = movieDetails;

  let bannerImgPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <div className="show">
      <Nav />
      <div className="show__container">
        <div className="show__container--header">
          <h1 className="show_header">{original_title}</h1>

          <div className="show__genre-container">
            <div className="show_genre">
              <p>{genres[0].name}</p>
            </div>

            <div className="show_runtime">
              <p>{runtime}mins</p>
            </div>
            <div className="show_ratings">
              <p>{vote_average}</p>
            </div>
          </div>

          <p className="show_overview">{overview}</p>
          <img
            className="show_image"
            src={bannerImgPath}
            alt={original_title}
          />
        </div>
      </div>
    </div>
  );
}

export default Show;
