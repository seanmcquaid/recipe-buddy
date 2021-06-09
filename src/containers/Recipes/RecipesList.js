import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recipesSelector } from '../../store/savedRecipes/selectors';
import {
  getRecipesAction,
  deleteRecipeAction,
} from '../../store/savedRecipes/actions';
import styled from 'styled-components';
import { LinkButton, Button } from '../../components';

const RecipesList = () => {
  const recipes = useSelector(recipesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesAction());
  }, []);

  const deleteRecipeButtonOnClick = (id) => {
    dispatch(deleteRecipeAction(id));
  };

  return (
    <StyledRecipesList>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id}>
          <RecipeName>{recipe.title}</RecipeName>
          <Button
            onClick={() => deleteRecipeButtonOnClick(recipe.id)}
            label="Delete"
            type="button"
          />
          <LinkButton label="View Recipe" to={`/recipe/${recipe.id}`} />
        </Recipe>
      ))}
    </StyledRecipesList>
  );
};

const StyledRecipesList = styled.ul``;

const Recipe = styled.li``;

const RecipeName = styled.span``;

export default RecipesList;
