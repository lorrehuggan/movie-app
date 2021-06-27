import React from 'react';
import './Nav.scss';

import UserNav from '../Elements/UserNav';

function Nav() {
  return (
    <nav>
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
