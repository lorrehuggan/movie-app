import React, { useEffect, useRef } from 'react';
import './SideBarLeft.scss';

//React Icons
import {
  AiFillHome,
  AiOutlineUsergroupAdd,
  AiFillSetting,
  AiOutlineLogout,
} from 'react-icons/ai';
import { RiCommunityFill } from 'react-icons/ri';
import { ImCompass2 } from 'react-icons/im';
import { RiTimerLine } from 'react-icons/ri';
import { FaUserFriends } from 'react-icons/fa';
import { VscFileMedia } from 'react-icons/vsc';
import { gsap } from 'gsap';

//Images
import Logo from '../Elements/Logo';

function SideBar() {
  const logo = useRef();

  useEffect(() => {
    gsap.from(logo.current, {
      duration: 1,
      opacity: 0,
      y: -100,
      delay: 1.5,
      ease: 'Power3.easeInOut',
    });
  }, []);
  return (
    <section className="sidebar">
      <div className="sidebar__left">
        <div className="sidebar__container">
          <Logo />

          <div className="sidebar__menu menu">
            <div className="sidebar__header">
              <h3>Menu</h3>
            </div>
            <ul>
              <li>
                <i>
                  <AiFillHome />
                </i>{' '}
                Home
              </li>
              <li>
                <i>
                  <RiCommunityFill />
                </i>{' '}
                Commuinity
              </li>
              <li>
                <i>
                  <ImCompass2 />
                </i>{' '}
                Discovery
              </li>
              <li>
                <i>
                  <RiTimerLine />
                </i>{' '}
                Coming Soon
              </li>
            </ul>
          </div>
          <div className="sidebar__social menu">
            <div className="sidebar__header">
              <h3>Social</h3>
            </div>
            <ul>
              <li>
                <i>
                  <FaUserFriends />
                </i>{' '}
                Friends
              </li>
              <li>
                {' '}
                <i>
                  <AiOutlineUsergroupAdd />
                </i>{' '}
                Parties
              </li>
              <li>
                <i>
                  <VscFileMedia />
                </i>{' '}
                Media
              </li>
            </ul>
          </div>
          <div className="social__general menu">
            <div className="sidebar__header">
              <h3>General</h3>
            </div>
            <ul>
              <li>
                <i>
                  <AiFillSetting />
                </i>{' '}
                Settings
              </li>
              <li>
                <i>
                  <AiOutlineLogout />
                </i>{' '}
                Log Out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideBar;
