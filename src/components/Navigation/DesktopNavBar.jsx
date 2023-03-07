import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/haupt-shop.png';
import InfoBar from '../InfoBar';
// import { useState } from 'react';

const Container = styled.div`
  background-color: rgb(33, 33, 33);
  margin-top: 3.2rem;
  padding: 32px 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-height: 130px;
  /* width: 100%; */
  @media screen and (max-width: 800px) {
    position: relative;
  }
`;
const Nav = styled.nav`
  /* margin-right: 7%; */
  /* width: 100%; */
`;
const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  padding: 0 1.6rem;
  list-style: none;
  background-color: rgb(33, 33, 33);
`;
const NavListItem = styled.li`
  font-family: 'DM Sans', sans-serif;
  font-weight: 300;
  /* font-size: 1.6rem; */
  color: #b8cad2;
  white-space: nowrap;
  &:hover {
    color: #005cf0;
    transform: scale(1.1);
    @media screen and (max-width: 800px) {
      &:hover {
        transform: none;
      }
    }
  }
`;

const NavLogo = styled.img`
  max-width: 15rem;
  height: auto;
`;

const NavBtn = styled.button`
  padding: 0.4rem;
  border-radius: 0.4rem;
  border: 2px solid #005cf0;
  color: #005cf0;
  background-color: transparent;
  &:hover {
    cursor: pointer;
    background-color: #005cf0;
    color: #b8cad2;
  }
`;

const DesktopNavBar = (props) => {
  // const [menuActive, setMenuActive] = useState(false);

  return (
    <Container>
      <InfoBar />
      <NavLink to='/haupt-shop/'>
        <NavLogo src={Logo} alt='llll' />
      </NavLink>
      <Nav>
        <NavList>
          <NavLink to='/haupt-shop/'>
            <NavListItem>Home</NavListItem>
          </NavLink>
          <NavLink to='/haupt-shop/about'>
            <NavListItem>About</NavListItem>
          </NavLink>
          <NavLink to='/haupt-shop/services'>
            <NavListItem>Services</NavListItem>
          </NavLink>
          <NavLink to='/haupt-shop/gallery'>
            <NavListItem>Gallery</NavListItem>
          </NavLink>
          <NavLink to='/haupt-shop/inventory'>
            <NavListItem>Our Inventory</NavListItem>
          </NavLink>
          <NavLink to='/haupt-shop/contact'>
            <NavListItem>Contact</NavListItem>
          </NavLink>
          <NavLink>
            <NavListItem>
              <NavBtn type='button' onClick={props.onQuoteClickDT}>
                Get a Free Quote
              </NavBtn>
            </NavListItem>
          </NavLink>
        </NavList>
      </Nav>
    </Container>
  );
};

export default DesktopNavBar;
