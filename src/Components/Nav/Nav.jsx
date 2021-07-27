import React, { useEffect, useState, useContext } from 'react';
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

//SideBar Context
import { SideBarContext } from '../../Context/SideBarContext';

function Nav() {
  const [showNav, setShowNav] = useState(false);
  const [error, setError] = useState();
  const { logout } = useAuth();
  const history = useHistory();
  const { openSideBar, setOpenSideBar } = useContext(SideBarContext);

  // show background on scroll

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  });

  //User Logout Function

  async function userLogOut() {
    setError('');

    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to logout');
    }
  }

  //Close Sidebar

  const sideBarToggle = () => {
    if (openSideBar === true) {
      setOpenSideBar(false);
    } else {
      setOpenSideBar(true);
    }
  };

  return (
    <Navigation direction="row" justify="center">
      <NavContainer
        showNav={showNav ? showNav : ''}
        direction="row"
        justify="space-between"
      >
        <LinksContainer direction="row" justify="space-between">
          <Links to="/tv">TV Series</Links>
          <Links to="/">Movies</Links>
          <Links>Anime</Links>
          <Links
            onClick={sideBarToggle}
            color="#61c0dd"
            hover="hsl(194, 75%, 42%)"
          >
            Menu
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
