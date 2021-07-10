import React, { useState, useEffect } from 'react';
import './SignUp.scss';
import Logo from '../Elements/Logo';
import axios from '../Utils/axios';
import request from '../Utils/request';

function SignUp({ login }) {
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
      className="signup"
      style={{
        backgroundImage: `url(${bannerImgPath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="signup-gradient-top"></div>
      <div className="signup-gradient-btm"></div>
      <Logo className="signup-logo" />

      <div className="signup__container">
        <h1>Sign Up</h1>
        <form className="signup__form">
          <input required placeholder="Name" type="text" />
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
          <div className="signup__form-message">
            <small> Already a member? Login </small>
            <small> Forgot Password?</small>
          </div>
        </form>
        <div className="signup__background">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
