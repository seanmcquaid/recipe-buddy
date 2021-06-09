import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { tokenSelector } from '../store/user/selectors';

const Navbar = () => {
  const isAuthenticated = useSelector(tokenSelector);
  return (
    <StyledNav>
      <NavLinks>
        {isAuthenticated ? (
          <NavLinkListItem>
            <NavLink to="/userHome">Home</NavLink>
          </NavLinkListItem>
        ) : (
          <NavLinkListItem>
            <NavLink to="/">Home</NavLink>
          </NavLinkListItem>
        )}
      </NavLinks>
    </StyledNav>
  );
};

const StyledNav = styled.nav``;

const NavLinks = styled.ul``;

const NavLinkListItem = styled.li``;

const NavLink = styled(Link)``;

export default Navbar;
