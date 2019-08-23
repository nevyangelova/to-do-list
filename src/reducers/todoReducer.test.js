import todosReducer from "./todosReducer";
import { FETCH_TODOS_SUCCESS } from "../actions";

describe("reducers", () => {
  describe("toDos", () => {
    const EMPTY_STATE = {
      data: [],
      error: null
    };

    const TODOS = [{}];

    it("adds fetched todos to the state", () => {
      const newState = todosReducer(EMPTY_STATE, {
        type: FETCH_TODOS_SUCCESS,
        body: TODOS
      });

      expect(newState).toEqual({
        ...EMPTY_STATE,
        data: TODOS
      });
    });
  });
});
