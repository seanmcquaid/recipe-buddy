import { useParams } from 'react-router';
import styled from 'styled-components';
import { H2, LoadingSpinner, P } from '../../components';
import useGetRecipeById from '../../hooks/useGetRecipeById';

const RecipeInfo = () => {
  const { id } = useParams();
  const { isLoading, errorMessage, recipeInfo } = useGetRecipeById(id);

  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />;
  }

  if (errorMessage) {
    return <P>{errorMessage}</P>;
  }

  return (
    <StyledRecipeInfo>
      <H2>{recipeInfo.title}</H2>
      <IngredientsList>
        {recipeInfo.ingredients.map((ingredient, i) => (
          <Ingredient key={i}>
            {ingredient.amount.us.value} {ingredient.amount.us.cups}{' '}
            {ingredient.name}
          </Ingredient>
        ))}
      </IngredientsList>
    </StyledRecipeInfo>
  );
};

const StyledRecipeInfo = styled.div``;

const IngredientsList = styled.ul``;

const Ingredient = styled.li``;

export default RecipeInfo;
