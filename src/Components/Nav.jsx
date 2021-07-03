import React, { useEffect, useState } from 'react';
import './Nav.scss';

import UserNav from '../Elements/UserNav';

function Nav({ log }) {
  const [showNav, setShowNav] = useState(false);

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
          <li>TV Series</li>
          <li>Movies</li>
          <li>Animes</li>
          <li>
            <button onClick={userLoginHandler}>log out</button>
          </li>
        </ul>

        <UserNav />
      </div>
    </nav>
  );
}

export default Nav;
