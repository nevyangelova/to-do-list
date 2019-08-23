import { FETCH_TODO_DETAILS_SUCCESS, UPDATE_TODO } from "../actions";
export default (state = { id: "" }, action) => {
  switch (action.type) {
    case FETCH_TODO_DETAILS_SUCCESS:
      return action.body;
    case UPDATE_TODO:
      return action.body;
    default:
      return state;
  }
};
