import React from 'react';
import './SideBar.scss';

function SideBar({ leftMenu }) {
  return (
    <section className="sidebar__container">
      <div className={leftMenu ? 'sidebar__left' : 'sidebar__right'}>
        <div className="sidebar__container">
          <div className="sidebar__logo">Logo</div>
          <div className="sidebar__menu">
            <div className="menu__logo">Menu</div>
          </div>
          <div className="sidebar__social">Social</div>
          <div className="social__general">General</div>
        </div>
      </div>
    </section>
  );
}

export default SideBar;
