import React, { useEffect, useRef, useContext } from 'react';

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

//Images
import Logo from '../../Elements/Logo';

//Styles
import {
  Wrapper,
  SideContainer,
  LogoContainer,
  LinkContainer,
  MenuList,
  Links,
} from './SideBarLeft.styles';

//context
import { SideBarContext } from '../../Context/SideBarContext';

function SideBar() {
  //Global Sidebar open
  const { openSideBar, setOpenSideBar } = useContext(SideBarContext);
  return (
    <Wrapper>
      <SideContainer openClose={openSideBar} justify="left">
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <LinkContainer>
          <MenuList direction="column" justify="space-between" align="left">
            <Links>Home</Links>
            <Links>Tv Series</Links>
            <Links>Anime</Links>
            <Links>Log Out</Links>
          </MenuList>
        </LinkContainer>
      </SideContainer>
    </Wrapper>
  );
}

export default SideBar;
