import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom';
import './SignUp.scss';
import Logo from '../Elements/Logo';
import axios from '../Utils/axios';
import request from '../Utils/request';

function SignUp() {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const bannerImgPath = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  //submitting form value to firebase auth 'signing up'

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match!');
    }
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to create an account');
    }
    setLoading(true);
  }

  // fetch random background image

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
        <form onSubmit={handleSubmit} className="signup__form">
          <input required ref={nameRef} placeholder="Name" type="text" />
          <input required ref={emailRef} placeholder="Email" type="email" />
          <input
            required
            ref={passwordRef}
            placeholder="Password"
            type="password"
          />
          <input
            ref={passwordConfirmRef}
            required
            placeholder="Password Confirm"
            type="password"
          />
          <button type="submit" disabled={loading}>
            Enter
          </button>
          <div className="signup__form-message">
            <Link to="login">
              <small> Already a member? Login </small>
            </Link>
            <Link>
              <small> Forgot Password?</small>
            </Link>
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
