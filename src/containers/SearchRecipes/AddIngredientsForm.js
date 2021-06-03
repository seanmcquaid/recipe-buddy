import propTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import { Button, TextInput } from '../../components';

const AddIngredientsForm = ({ setIngredients }) => {
  const [ingredient, setIngredient] = useState('');

  const onChange = (event) => {
    setIngredient(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setIngredients((prevState) => [...prevState, ingredient]);
    setIngredient('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <TextInput
        value={ingredient}
        onChange={onChange}
        name="ingredient"
        label="Add Ingredient"
        type="text"
      />
      <Button type="submit" label="Add" />
    </Form>
  );
};

const Form = styled.form``;

AddIngredientsForm.propTypes = {
  setIngredients: propTypes.func.isRequired,
};

export default AddIngredientsForm;
