import styled from 'styled-components';
import { H1, LinkButton } from '../../components';

const Home = () => (
  <PageContainer>
    <Header>
      <H1>Recipe Buddy</H1>
    </Header>
    <Main>
      <LinkButton to="/login" label="Login" />
      <LinkButton to="/register" label="Register" />
    </Main>
  </PageContainer>
);

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default Home;
