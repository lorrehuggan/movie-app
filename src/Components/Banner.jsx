import React, { useEffect, useState } from 'react';
import './Banner.scss';
import request from '../Utils/request';
import axios from '../Utils/axios';

const base_img_url = 'https://image.tmdb.org/t/p/original';

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
    <section
      className="banner"
      style={{
        backgroundImage: `url(${bannerImgPath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__background">
        <h1 className="banner__heading">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
          <button>Play</button>
          <button>My List</button>
        </div>
        <p className="banner__info">{truncate(movie.overview, 150)}</p>
      </div>
      {/* <div className="banner__fade-bottom"></div>
      <div className="banner__fade-top"></div> */}
    </section>
  );
}

export default Banner;
