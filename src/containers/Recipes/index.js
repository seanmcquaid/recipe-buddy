import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { H1, P } from '../../components';
import { errorMessageSelector } from '../../store/error/selectors';
import RecipesList from './RecipesList';

const Recipes = () => {
  const errorMessage = useSelector(errorMessageSelector);

  return (
    <PageContainer>
      <Header>
        <H1>Recipes</H1>
      </Header>
      <Main>
        <P data-testid="errorMessage">{errorMessage}</P>
        <RecipesList />
      </Main>
    </PageContainer>
  );
};

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default Recipes;
