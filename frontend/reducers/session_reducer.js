import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const defaultState = {
  currentUser: null,
  // errors: []
};

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState['currentUser'] = action.currentUser;
      return newState;
    default:
      return state;
  }
}

export default sessionReducer;
