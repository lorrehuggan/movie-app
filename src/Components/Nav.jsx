import React, { useEffect, useState } from 'react';
import './Nav.scss';
//React Router
import { Link, useHistory } from 'react-router-dom';

//User Auth
import { useAuth } from '../Context/AuthContext';

//User
import UserNav from '../Elements/UserNav';

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
          {error && <Link>{error}</Link>}
        </ul>
        <div className="nav__user-log">
          <button onClick={userLogOut}>Log out</button>
          <UserNav />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
