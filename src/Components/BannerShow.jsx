import React, { useEffect, useState } from 'react';
import './BannerShow.scss';
import request from '../Utils/request';
import axios from '../Utils/axios';

function BannerShow({ backdrop, overview, original_title, title }) {
  const [movie, setMovie] = useState([]);
  let bannerImgPath = `https://image.tmdb.org/t/p/original${backdrop}`;

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
      className="banner-show"
      style={{
        backgroundImage: `url(${bannerImgPath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__gradient"></div>
      <div className="banner__background">
        <h1 className="banner__heading">{title || original_title}</h1>
        <div className="banner__buttons">
          <button>Play</button>
          <button>My List</button>
        </div>
        <p className="banner__info">{truncate(overview, 350)}</p>
      </div>

      {/* <div className="banner__fade-bottom"></div>
      <div className="banner__fade-top"></div> */}
    </section>
  );
}

export default BannerShow;
