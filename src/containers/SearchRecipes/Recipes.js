import propTypes from 'prop-types';
import useSearchRecipesByIngredients from '../../hooks/useSearchRecipesByIngredients';

const Recipes = ({ ingredients }) => {
  const { isLoading, errorMessage, recipes } =
    useSearchRecipesByIngredients(ingredients);
};

Recipes.propTypes = {
  ingredients: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
};

export default Recipes;
