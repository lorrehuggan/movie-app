import React from 'react';
import './UserNav.scss';
import uiFace from '../img/uiFace.jpg';

function UserNav() {
  return (
    <div className="user__id">
      <img src={uiFace} alt="uiFace" />
    </div>
  );
}

export default UserNav;
