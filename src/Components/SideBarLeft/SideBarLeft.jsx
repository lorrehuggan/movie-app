import React, { useEffect, useRef, useContext } from 'react';

//Images
import Logo from '../Logo/Logo';

//Styles
import {
  Wrapper,
  SideContainer,
  LogoContainer,
  LinkContainer,
  MenuList,
  Links,
  Signature,
} from './SideBarLeft.styles';
import { Paragraph } from '../FontAttr/type';

//context
import { SideBarContext } from '../../Context/SideBarContext';

function SideBar() {
  //Global Sidebar open
  const { openSideBar, setOpenSideBar } = useContext(SideBarContext);
  return (
    <Wrapper openClose={openSideBar}>
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
            <Links
              style={{ color: 'crimson' }}
              onClick={() => setOpenSideBar(false)}
            >
              Close Menu
            </Links>
          </MenuList>
        </LinkContainer>
        <Signature>
          <Paragraph>Developed By Lorre Huggan</Paragraph>
        </Signature>
      </SideContainer>
    </Wrapper>
  );
}

export default SideBar;
