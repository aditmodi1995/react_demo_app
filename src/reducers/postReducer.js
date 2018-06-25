import { FETCH_POSTS, NEW_POST, FETCH_POST, EDIT_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      }
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      }
    case FETCH_POST:
      return {
        ...state,
        item: action.payload
      }
    case EDIT_POST:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}