import {FETCHING, FETCHED, ERROR} from '../actions/index';

const initialState = {
  fetching: false,
  fetched: false,
  error: '',
  chars: []
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
// Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
  export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {fetching: true});
    case FETCHED:
      return Object.assign({}, state, {fetching: false, chars: state.chars.concat(action.chars)});
    case ERROR:
      return Object.assign({}, state, {fetching: false, error: action.error})
    default:
      return state;
  }
};
