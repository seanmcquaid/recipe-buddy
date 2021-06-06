import styled from 'styled-components';
import { H1 } from '../../components';
import RecipeInfo from './RecipeInfo';

const Recipe = () => (
  <PageContainer>
    <Header>
      <H1>Recipe Info</H1>
    </Header>
    <Main>
      <RecipeInfo />
    </Main>
  </PageContainer>
);

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default Recipe;
