import { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return action.payload;
        default:
            return state;
    }
}