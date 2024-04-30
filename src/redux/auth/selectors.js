export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectCurrentUser = state => state.auth.isCurrentUser;

export const selectError = state => state.auth.error;