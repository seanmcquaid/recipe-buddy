import { createSelector } from 'reselect';

export const userSelector = (state) => state.user;

export const tokenSelector = createSelector(userSelector, (user) => user.token);

export const userErrorMessageSelector = createSelector(
  userSelector,
  (user) => user.errorMessage,
);
