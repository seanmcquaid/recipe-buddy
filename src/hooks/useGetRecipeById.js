import { useEffect, useReducer } from 'react';
import spoontacularServices from '../services/spoontacular/spoontacularServices';

const initialState = {
  isLoading: false,
  recipeInfo: {},
  errorMessage: '',
};

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
        recipeInfo: action.payload.recipeInfo,
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

const useGetRecipeById = (id) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: actionTypes.LOADING });
    spoontacularServices
      .getRecipeById(id)
      .then(({ data }) => {
        dispatch({ type: actionTypes.SUCCESS, payload: { recipeInfo: data } });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: actionTypes.ERROR,
          payload: {
            errorMessage:
              'There was a problem getting this recipe, please try again',
          },
        });
      });
  }, [id, dispatch]);

  return state;
};

export default useGetRecipeById;
