import propTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../../components';

const Ingredients = ({ ingredients, setIngredients }) => {
  const removeButtonOnClick = (ingredient) => {
    setIngredients(ingredients.filter(ingredient !== ingredient));
  };

  return (
    <IngredientsList>
      {ingredients.map((ingredient, i) => (
        <Ingredient key={i}>
          <IngredientName>{ingredient}</IngredientName>
          <Button
            onClick={() => removeButtonOnClick(ingredient)}
            label="Remove"
            type="button"
          />
        </Ingredient>
      ))}
    </IngredientsList>
  );
};

const IngredientsList = styled.ul``;

const Ingredient = styled.li``;

const IngredientName = styled.span``;

Ingredients.propTypes = {
  ingredients: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  setIngredients: propTypes.func.isRequired,
};

export default Ingredients;
