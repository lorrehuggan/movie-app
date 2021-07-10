import React, { useEffect, useState } from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

import UserNav from '../Elements/UserNav';

function Nav({ log }) {
  const [showNav, setShowNav] = useState(false);

  // show backgroung on scroll
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  });

  const userLoginHandler = () => {
    log(false);
  };

  return (
    <nav>
      <div
        className={
          showNav
            ? 'nav-black nav__container'
            : 'nav-black-false nav__container'
        }
      >
        <ul>
          <Link to="/tv">TV Series</Link>
          <Link to="/">Movies</Link>
          <Link>Anime</Link>
        </ul>
        <div className="nav__user-log">
          <button onClick={userLoginHandler}>Log out</button>
          <UserNav />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
