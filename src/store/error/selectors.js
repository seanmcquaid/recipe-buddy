import { createSelector } from 'reselect';

export const errorSelector = (state) => state.error;

export const errorMessageSelector = createSelector(
  errorSelector,
  (error) => error.errorMessage,
);
