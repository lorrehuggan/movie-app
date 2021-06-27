import React from 'react';
import './SideBar.scss';

function SideBar({ leftMenu }) {
  return (
    <section className="sidebar">
      <div className={leftMenu ? 'sidebar__left' : 'sidebar__right'}>
        <div className="sidebar__container">
          <div className="sidebar__logo menu">Logo</div>
          <div className="sidebar__menu menu">
            <div className="sidebar__header">
              <h3>Menu</h3>
            </div>
            <ul>
              <li>Home</li>
              <li>Commuinity</li>
              <li>Discovery</li>
              <li>Coming Soon</li>
            </ul>
          </div>
          <div className="sidebar__social menu">
            <div className="sidebar__header">
              <h3>Social</h3>
            </div>
            <ul>
              <li>Friends</li>
              <li>Parties</li>
              <li>Media</li>
            </ul>
          </div>
          <div className="social__general menu">
            <div className="sidebar__header">
              <h3>General</h3>
            </div>
            <ul>
              <li>Settings</li>
              <li>Log Out</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideBar;
