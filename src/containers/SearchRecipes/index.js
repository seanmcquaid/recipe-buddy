import { useState } from 'react';
import styled from 'styled-components';
import { H1 } from '../../components';
import AddIngredientsForm from './AddIngredientsForm';
import Recipes from './Recipes';

const SearchRecipes = () => {
  const [ingredients, setIngredients] = useState([]);

  return (
    <PageContainer>
      <Header>
        <H1>Search Recipes</H1>
      </Header>
      <Main>
        <Recipes ingredients={ingredients} />
        <AddIngredientsForm setIngredients={setIngredients} />
      </Main>
    </PageContainer>
  );
};

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default SearchRecipes;
