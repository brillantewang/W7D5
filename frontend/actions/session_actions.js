import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

// thunk action creators

export const login = user => dispatch => {
  SessionAPIUtil.login(user)
    .then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      err => dispatch(receiveErrors(err))
    )
};

export const logout = () => dispatch => {
  SessionAPIUtil.logout()
    .then(
      response => dispatch(receiveCurrentUser(null)),
      err => dispatch(receiveErrors(err))
    )
};

export const signup = user => dispatch => {
  SessionAPIUtil.signup(user)
    .then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      err => dispatch(receiveErrors(err))
    )
};
