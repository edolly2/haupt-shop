import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MobileNavBar from './MobileNavBar';
import DesktopNavBar from './DesktopNavBar';

const Container = styled.header`
  /* position: relative; */
  /* width: 100vw; */
  /* display: flex; */
  /* background-color: rgba(119, 119, 119, 0.6); */
  /* backdrop-filter: blur(5px); */
  /* padding: 0.8rem; */
  /* z-index: 4; */
  /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9); */
  /* position: relative; */
`;

// const Overlay = styled.div`
//   position: absolute;
//   /* z-index: 1; */
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   width: 100vw;
//   height: 100vh;
// `;

const Header = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  // const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const breakpoint = 920;
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return width < breakpoint ? (
    // <Container>
    <MobileNavBar onQuoteClickMB={props.onQuoteClickMB} />
  ) : (
    // </Container>
    // <Container>
    <DesktopNavBar onQuoteClickDT={props.onQuoteClickDT} />
    // </Container>
  );
};

export default Header;
