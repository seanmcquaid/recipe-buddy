import { useEffect, useReducer } from 'react';
import spoontacularServices from '../services/spoontacular/spoontacularServices';

const initialState = {};

const actionTypes = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.SUCCESS:
      return {
        ...state,
        ingredients: action.payload.ingredients,
        isLoading: false,
      };
    case actionTypes.ERROR:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        isLoading: false,
      };
    default:
      return state;
  }
};

const useSearchRecipesByIngredients = (ingredients) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: actionTypes.LOADING });
    spoontacularServices
      .searchRecipesByIngredients(ingredients)
      .then(({ data }) => {
        dispatch({ type: actionTypes.SUCCESS, payload: { ingredients: data } });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: actionTypes.ERROR,
          payload: {
            errorMessage:
              'There was a problem getting recipes for these ingredients, please try again',
          },
        });
      });
  }, [ingredients, dispatch]);

  return state;
};

export default useSearchRecipesByIngredients;
