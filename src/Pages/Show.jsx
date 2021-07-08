import React, { useEffect, useState } from 'react';
import BannerShow from '../Components/BannerShow';
import './Show.scss';
import axios from '../Utils/axios';
import { API_KEY } from '../Utils/request';

function Show({ match }) {
  let { id } = match.params;
  let [movieDetails, setMovieDetails] = useState('');

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

  let { backdrop_path, original_title, overview, tagline, title } =
    movieDetails;

  return (
    <div className="show">
      <div className="show__container">
        <BannerShow
          original_title={original_title}
          backdrop={backdrop_path}
          overview={overview}
          title={title}
        />
      </div>
    </div>
  );
}

export default Show;
