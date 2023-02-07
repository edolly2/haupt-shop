import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/haupt-shop.png';

const Container = styled.div`
  background-color: rgb(33, 33, 33);
  padding: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;
const Nav = styled.nav`
  /* margin-right: 7%; */
  width: 100%;
`;
const NavList = styled.ul`
  display: flex;
  gap: 2.4rem;
  padding: 0 1.6rem;
  list-style: none;
`;
const NavListItem = styled.li`
  font-family: 'DM Sans', sans-serif;
  font-weight: 300;
  font-size: 1.6rem;
  color: #b8cad2;
  &:hover {
    color: #005cf0;
    transform: scale(1.1);
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
  return (
    <Container>
      <NavLogo src={Logo} alt='llll' />
      <Nav>
        <NavList>
          <NavLink>
            <NavListItem>Home</NavListItem>
          </NavLink>
          <NavLink>
            <NavListItem>About</NavListItem>
          </NavLink>
          <NavLink>
            <NavListItem>Services</NavListItem>
          </NavLink>
          <NavLink>
            <NavListItem>Gallery</NavListItem>
          </NavLink>
          <NavLink>
            <NavListItem>Our Inventory</NavListItem>
          </NavLink>
          <NavLink>
            <NavListItem>Contact</NavListItem>
          </NavLink>
          <NavLink>
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
