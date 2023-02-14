import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/haupt-shop.png';
// import { useState } from 'react';

const Container = styled.div`
  background-color: rgb(33, 33, 33);
  padding: 36px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
      <NavLogo src={Logo} alt='llll' />
      <Nav>
        <NavList>
          <NavLink to='/'>
            <NavListItem>Home</NavListItem>
          </NavLink>
          <NavLink to='/about'>
            <NavListItem>About</NavListItem>
          </NavLink>
          <NavLink to='/services'>
            <NavListItem>Services</NavListItem>
          </NavLink>
          <NavLink to='/gallery'>
            <NavListItem>Gallery</NavListItem>
          </NavLink>
          <NavLink to='/inventory'>
            <NavListItem>Our Inventory</NavListItem>
          </NavLink>
          <NavLink to='/contact'>
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
