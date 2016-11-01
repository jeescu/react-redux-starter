import * as actionTypes from '../actions/actionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
}
