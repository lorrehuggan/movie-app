import React, { useEffect, useState } from 'react';
//React Router
import { Link, useHistory } from 'react-router-dom';

//User Auth
import { useAuth } from '../../Context/AuthContext';

//User
import UserNav from '../../Elements/UserNav';

//Styles
import {
  Navigation,
  NavContainer,
  LinksContainer,
  Links,
  UserLog,
} from './Nav.styles';
import { Button } from '../Button/Button';

function Nav() {
  const [showNav, setShowNav] = useState(false);
  const [error, setError] = useState();
  const { logout } = useAuth();
  const history = useHistory();

  // show background on scroll

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  });

  async function userLogOut() {
    setError('');

    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to logout');
    }
  }

  return (
    <Navigation direction="row" justify="center">
      <NavContainer direction="row" justify="space-between">
        <LinksContainer direction="row" justify="space-between">
          <Links to="/tv">TV Series</Links>
          <Links to="/">Movies</Links>
          <Links>Anime</Links>
          <Links color="#61c0dd" hover="hsl(194, 75%, 42%)">
            Menu
          </Links>
          <Links color="#61c0dd" hover="hsl(194, 75%, 42%)">
            Search
          </Links>
          <Links
            onClick={userLogOut}
            color="#61c0dd"
            hover="hsl(194, 75%, 42%)"
          >
            Log Out
          </Links>
          {error && <Links>{error}</Links>}
        </LinksContainer>
        <UserLog direction="row" justify="space-between">
          <UserNav />
        </UserLog>
      </NavContainer>
    </Navigation>
  );
}

export default Nav;
