import { createSelector } from 'reselect';

export const userSelector = (state) => state.user;

export const tokenSelector = createSelector(userSelector, (user) => user.token);
