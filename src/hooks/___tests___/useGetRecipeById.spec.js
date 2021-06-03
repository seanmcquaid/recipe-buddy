import { renderHook } from '@testing-library/react-hooks';
import useGetRecipeById from '../useGetRecipeById';
import mockServiceError from '../../testUtils/mockServiceError';
import mockServiceSuccess from '../../testUtils/mockServiceSuccess';
import spoontacularServices from '../../services/spoontacular/spoontacularServices';

describe('useGetRecipeById', () => {
  it('successful request', async () => {
    mockServiceSuccess(spoontacularServices, 'getRecipeById', {
      data: { title: 'Parmesan Cheese' },
    });
    const { result, waitForNextUpdate } = renderHook(() => useGetRecipeById(1));

    expect(result.current.isLoading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.recipeInfo).toEqual({ title: 'Parmesan Cheese' });
  });
  it('Unsuccessful request', async () => {
    mockServiceError(spoontacularServices, 'getRecipeById');
    const { result, waitForNextUpdate } = renderHook(() => useGetRecipeById(1));

    expect(result.current.isLoading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.errorMessage).toEqual(
      'There was a problem getting this recipe, please try again',
    );
  });
});
