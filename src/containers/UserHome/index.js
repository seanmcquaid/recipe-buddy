import styled from 'styled-components';
import { H1, LinkButton } from '../../components';

const UserHome = () => (
  <PageContainer>
    <Header>
      <H1>User Home</H1>
    </Header>
    <Main>
      <LinkButton to="/profile" label="Profile" />
      <LinkButton to="/currentRecipes" label="Current Recipes" />
      <LinkButton to="/searchRecipes" label="Search for Recipes" />
    </Main>
  </PageContainer>
);

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default UserHome;
