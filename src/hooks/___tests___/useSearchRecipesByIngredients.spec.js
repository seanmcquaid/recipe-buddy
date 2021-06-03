import { renderHook } from '@testing-library/react-hooks';
import useSearchRecipesByIngredients from '../useSearchRecipesByIngredients';
import mockServiceError from '../../testUtils/mockServiceError';
import mockServiceSuccess from '../../testUtils/mockServiceSuccess';
import spoontacularServices from '../../services/spoontacular/spoontacularServices';

describe('useSearchRecipesByIngredients', () => {
  it('successful request', async () => {
    mockServiceSuccess(spoontacularServices, 'searchRecipesByIngredients', {
      data: [{ title: 'Parmesan Cheese' }],
    });
    const { result, waitForNextUpdate } = renderHook(() =>
      useSearchRecipesByIngredients('Parmesan'),
    );

    expect(result.current.isLoading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.recipes).toEqual([{ title: 'Parmesan Cheese' }]);
  });
  it('Unsuccessful request', async () => {
    mockServiceError(spoontacularServices, 'searchRecipesByIngredients');
    const { result, waitForNextUpdate } = renderHook(() =>
      useSearchRecipesByIngredients(''),
    );

    expect(result.current.isLoading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.errorMessage).toEqual(
      'There was a problem getting recipes for these ingredients, please try again',
    );
  });
});
