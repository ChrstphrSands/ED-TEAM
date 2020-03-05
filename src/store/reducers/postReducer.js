import * as Actions from '../actions';

const initialState = {
  posts: []
}

const postReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    default:
      return state;
  }
}

export default postReducer;
