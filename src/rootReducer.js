import { combineReducers } from "redux";
import toDos from "./reducers/todosReducer";
import toDoDetails from "./reducers/todoDetailsReducer";

const appReducer = combineReducers({
  toDos,
  toDoDetails
});

export default (state, action) => {
  const nextState = { ...state };
  return appReducer(nextState, action);
};
