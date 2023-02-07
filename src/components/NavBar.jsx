import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/haupt-shop.png';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import { useState } from 'react';

const Container = styled.div`
  background-color: rgb(33, 33, 33);
  padding: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
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
  @media screen and (max-width: 800px) {
    flex-direction: column;
    position: absolute;
    z-index: 2;
    top: 100%;
    right: 0;
    padding: 2.4rem 1.6rem;
    width: 40vw;
    gap: 2.4rem;
  }
`;
const NavListItem = styled.li`
  font-family: 'DM Sans', sans-serif;
  font-weight: 300;
  font-size: 1.6rem;
  color: #b8cad2;
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
  max-width: 10rem;
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

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <Container>
      <NavLogo src={Logo} alt='llll' />
      <Nav>
        <HiOutlineMenuAlt3
          className='icon hamburger-icon'
          style={{ display: menuActive ? 'none' : 'block' }}
          onClick={() => setMenuActive(!menuActive)}
        />

        <CgClose
          className='icon hamburger-icon'
          style={{ display: menuActive ? 'block' : 'none' }}
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
            to='/'
          >
            <NavListItem>Home</NavListItem>
          </NavLink>
          <NavLink
            onClick={() => {
              setTimeout(() => {
                setMenuActive(false);
              }, 50);
            }}
            to='/about'
          >
            <NavListItem>About</NavListItem>
          </NavLink>
          <NavLink
            onClick={() => {
              setTimeout(() => {
                setMenuActive(false);
              }, 50);
            }}
            to='/services'
          >
            <NavListItem>Services</NavListItem>
          </NavLink>
          <NavLink
            onClick={() => {
              setTimeout(() => {
                setMenuActive(false);
              }, 50);
            }}
            to='/gallery'
          >
            <NavListItem>Gallery</NavListItem>
          </NavLink>
          <NavLink
            onClick={() => {
              setTimeout(() => {
                setMenuActive(false);
              }, 50);
            }}
            to='/inventory'
          >
            <NavListItem>Our Inventory</NavListItem>
          </NavLink>
          <NavLink
            onClick={() => {
              setTimeout(() => {
                setMenuActive(false);
              }, 50);
            }}
            to='/contact'
          >
            <NavListItem>Contact</NavListItem>
          </NavLink>
          <NavLink
            onClick={() => {
              setTimeout(() => {
                setMenuActive(false);
              }, 50);
            }}
            to='/quote'
          >
            <NavListItem>
              <NavBtn>Get a Free Quote</NavBtn>
            </NavListItem>
          </NavLink>
        </NavList>
      </Nav>
    </Container>
  );
};

export default NavBar;
