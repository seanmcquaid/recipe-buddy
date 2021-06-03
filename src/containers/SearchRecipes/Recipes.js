import propTypes from 'prop-types';
import styled from 'styled-components';
import { LoadingSpinner, P } from '../../components';
import useSearchRecipesByIngredients from '../../hooks/useSearchRecipesByIngredients';

const Recipes = ({ ingredients }) => {
  const { isLoading, errorMessage, recipes } =
    useSearchRecipesByIngredients(ingredients);

  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />;
  }

  if (errorMessage) {
    return <P>{errorMessage}</P>;
  }

  return (
    <RecipesList>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id}>{recipe.title}</Recipe>
      ))}
    </RecipesList>
  );
};

const RecipesList = styled.ul``;

const Recipe = styled.li``;

Recipes.propTypes = {
  ingredients: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
};

export default Recipes;
