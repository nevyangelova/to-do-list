import {
  ADD_TODO,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  ADD_TODO_ERROR
} from "../actions";
export default (
  state = {
    data: [],
    error: null
  },
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        data: [...state.data, action.body]
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.body]
      };
    case FETCH_TODOS_ERROR:
    case ADD_TODO_ERROR:
      return {
        ...state,
        error: action.body
      };

    default:
      return state;
  }
};
