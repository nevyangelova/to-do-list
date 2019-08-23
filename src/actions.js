export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_ERROR = "ADD_TODO_ERROR";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR";
export const FETCH_TODO_DETAILS_SUCCESS = "FETCH_TODO_DETAILS_SUCCESS";
export const FETCH_TODO_DETAILS_ERROR = "FETCH_TODO_DETAILS_ERROR";
export const UPDATE_TODO = "UPDATE_TODO";

export const addToDoAction = toDo => dispatch => {
  fetch("https://backend.pi-top.com/todo-test/v1/todos/", {
    method: "POST",
    body: JSON.stringify(toDo)
  })
    .then(response => response.json())
    .then(response => {
      if (response.error) {
        dispatch({ type: ADD_TODO_ERROR, body: response.error.message });
      } else {
        dispatch({
          type: ADD_TODO_SUCCESS,
          body: {
            ...toDo,
            tags: toDo.tags.split()
          }
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const fetchToDosAction = () => dispatch => {
  fetch("https://backend.pi-top.com/todo-test/v1/todos")
    .then(response => response.json())
    .then(response => {
      if (response.error) {
        dispatch({ type: FETCH_TODOS_ERROR, body: response.error.message });
      } else {
        dispatch({ type: FETCH_TODOS_SUCCESS, body: response });
      }
    });
};

export const fetchToDoDetailsAction = toDoId => dispatch => {
  fetch(`https://backend.pi-top.com/todo-test/v1/todos/${toDoId}`)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        dispatch({ type: FETCH_TODO_DETAILS_ERROR, body: error });
      } else {
        dispatch({ type: FETCH_TODO_DETAILS_SUCCESS, body: data });
      }
    });
};

export const updateToDoAction = toDo => dispatch => {
  const payload = {
    isDone: toDo.isDone
  };

  fetch(`https://backend.pi-top.com/todo-test/v1/todos/${toDo.id}`, {
    method: "PUT",
    body: JSON.stringify(payload)
  })
    .then(response => response.json())
    .then(() =>
      dispatch({
        type: UPDATE_TODO,
        body: {
          ...toDo
        }
      })
    );
};
