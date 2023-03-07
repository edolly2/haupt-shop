import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/haupt-shop.png';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import { useState } from 'react';
import InfoBar from '../InfoBar';

const Container = styled.div`
  background-color: rgb(33, 33, 33);
  padding: 24px 16px;
  margin-top: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* width: 100%; */
  position: relative;
`;
const Nav = styled.nav`
  /* margin-right: 7%; */
  /* width: 100%; */
`;
const NavList = styled.ul`
  display: flex;
  gap: 2.4rem;
  list-style: none;
  background-color: rgb(33, 33, 33);
  flex-direction: column;
  position: absolute;
  z-index: 2;
  top: 99%;
  right: 0;
  padding: 24px;
  width: 60vw;
`;
const NavListItem = styled.li`
  font-family: 'DM Sans', sans-serif;
  font-weight: 300;
  white-space: nowrap;
  /* font-size: 1.6rem; */
  color: #b8cad2;
  &:hover {
    transform: none;
  }
`;

const NavLogo = styled.img`
  max-width: 12rem;
  height: auto;
`;

const NavBtn = styled.button`
  padding: 0.4rem;
  border-radius: 0.4rem;
  border: 2px solid #005cf0;
  color: #005cf0;
  background-color: transparent;
  width: 15rem;
  &:hover {
    cursor: pointer;
    background-color: #005cf0;
    color: #b8cad2;
  }
`;

const MobileNavBar = (props) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <Container>
      <InfoBar />
      <NavLink to='/haupt-shop/'>
        <NavLogo src={Logo} alt='llll' />
      </NavLink>
      <Nav>
        <HiOutlineMenuAlt3
          className='icon hamburger-icon'
          style={{ display: menuActive ? 'none' : 'flex' }}
          onClick={() => setMenuActive(!menuActive)}
        />

        <CgClose
          className='icon hamburger-icon'
          style={{ display: menuActive ? 'flex' : 'none' }}
          onClick={() => setMenuActive(!menuActive)}
        />
        <NavList
          style={{
            display: menuActive ? 'flex' : 'none',
          }}
        >
          <NavLink
            onClick={() => {
              setTimeout(() => {
                setMenuActive(false);
              }, 50);
            }}
            to='/haupt-shop/'
          >
            <NavListItem>Home</NavListItem>
          </NavLink>
          <NavLink
            onClick={() => {
              setTimeout(() => {
                setMenuActive(false);
              }, 50);
            }}
            to='/haupt-shop/about'
          >
            <NavListItem>About</NavListItem>
          </NavLink>
          <NavLink
            onClick={() => {
              setTimeout(() => {
                setMenuActive(false);
              }, 50);
            }}
            to='/haupt-shop/services'
          >
            <NavListItem>Services</NavListItem>
          </NavLink>
          <NavLink
            onClick={() => {
              setTimeout(() => {
                setMenuActive(false);
              }, 50);
            }}
            to='/haupt-shop/gallery'
          >
            <NavListItem>Gallery</NavListItem>
          </NavLink>
          <NavLink
            onClick={() => {
              setTimeout(() => {
                setMenuActive(false);
              }, 50);
            }}
            to='/haupt-shop/inventory'
          >
            <NavListItem>Our Inventory</NavListItem>
          </NavLink>
          <NavLink
            onClick={() => {
              setTimeout(() => {
                setMenuActive(false);
              }, 50);
            }}
            to='/haupt-shop/contact'
          >
            <NavListItem>Contact</NavListItem>
          </NavLink>
          <NavLink
            onClick={() => {
              setTimeout(() => {
                setMenuActive(false);
              }, 50);
            }}
          >
            <NavListItem>
              <NavBtn type='button' onClick={props.onQuoteClickMB}>
                Free Quote
              </NavBtn>
            </NavListItem>
          </NavLink>
        </NavList>
      </Nav>
    </Container>
  );
};

export default MobileNavBar;
