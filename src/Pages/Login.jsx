import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import './Login.scss';
import Logo from '../Elements/Logo';
import axios from '../Utils/axios';
import request from '../Utils/request';

function Login() {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const bannerImgPath = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  //logging in

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/home');
    } catch {
      setError('Failed to login');
    }
    setLoading(false);
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
        {error && (
          <h4
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: 'red',
              borderRadius: '16px',
              padding: '1rem 1.5rem',
              textTransform: 'uppercase',
              width: '100%',
            }}
          >
            {error}
          </h4>
        )}
        <form onSubmit={handleSubmit} className="login__form">
          <input ref={emailRef} required placeholder="Email" type="text" />

          <input
            ref={passwordRef}
            required
            placeholder="Password"
            type="password"
          />
          <button type="submit">Enter</button>
          <div className="login__form-message">
            <Link to="signup">
              <small> Sign Up </small>
            </Link>
            <Link>
              <small> Forgot Password?</small>
            </Link>
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
