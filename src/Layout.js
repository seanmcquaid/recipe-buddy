import propTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import LoadingLayover from './LoadingLayover';

const Layout = ({ children }) => (
  <LayoutContainer>
    <Navbar />
    {children}
    <LoadingLayover />
    <Footer>Footer</Footer>
  </LayoutContainer>
);

const LayoutContainer = styled.div``;

const Footer = styled.footer``;

Layout.propTypes = {
  children: propTypes.element.isRequired,
};

export default Layout;
