import React, { useState, useEffect } from 'react';
import './Login.scss';
import Logo from '../Elements/Logo';
import axios from '../Utils/axios';
import request from '../Utils/request';

function Login({ login }) {
  const [movie, setMovie] = useState([]);
  const bannerImgPath = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

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
    <div
      className="login"
      style={{
        backgroundImage: `url(${bannerImgPath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="login-gradient-top"></div>
      <div className="login-gradient-btm"></div>
      <Logo className="login-logo" />

      <div className="login__container">
        <h1>Log In</h1>
        <form className="login__form">
          <input required placeholder="Email" type="text" />

          <input required placeholder="Password" type="password" />
          <button
            onClick={() => {
              login(true);
            }}
            type="submit"
          >
            Enter
          </button>
          <div className="login__form-message">
            <small> Sign Up </small>
            <small> Forgot Password?</small>
          </div>
        </form>
        <div className="login__background">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
