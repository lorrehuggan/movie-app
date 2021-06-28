import React, { useEffect, useState } from 'react';
import './Nav.scss';

import UserNav from '../Elements/UserNav';

function Nav() {
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

  return (
    <nav className={showNav ? 'nav-black' : 'nav-black-false'}>
      <ul>
        <li>TV Series</li>
        <li>Movies</li>
        <li>Animes</li>
      </ul>
      <UserNav />
    </nav>
  );
}

export default Nav;
