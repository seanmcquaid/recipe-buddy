import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import { Button, H2, LoadingSpinner, P } from '../../components';
import useGetRecipeById from '../../hooks/useGetRecipeById';
import { addRecipeAction } from '../../store/savedRecipes/actions';

const RecipeInfo = () => {
  const { id } = useParams();
  const { isLoading, errorMessage, recipeInfo } = useGetRecipeById(id);
  const dispatch = useDispatch();
  const history = useHistory();

  const addRecipeButtonOnClick = () => {
    dispatch(addRecipeAction(id, recipeInfo.title)).then(() => {
      history.push('/searchRecipes');
    });
  };

  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />;
  }

  if (errorMessage) {
    return <P>{errorMessage}</P>;
  }

  return (
    <StyledRecipeInfo>
      <H2>{recipeInfo.title}</H2>
      <Button
        onClick={addRecipeButtonOnClick}
        label="Add Recipe"
        type="button"
      />
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
