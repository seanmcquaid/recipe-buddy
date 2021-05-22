import styled from 'styled-components';
import Navbar from './components/Navbar';

const Layout = ({ children }) => (
  <LayoutContainer>
    <Navbar />
    {children}
    <Footer>Footer</Footer>
  </LayoutContainer>
);

const LayoutContainer = styled.div``;

const Footer = styled.footer``;

export default Layout;
