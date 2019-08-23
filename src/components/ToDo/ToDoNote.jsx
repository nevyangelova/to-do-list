import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchToDoDetailsAction, updateToDoAction } from "../../actions";

const StyledToDoNote = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => (props.isDone ? "#20bb95" : "#fff")};
  text-align: center;
  color: ${props => (props.isDone ? "#fff" : "#20bb95")};
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  margin: 1em;
  padding: 1em;
  border: 2px solid #639;
  border-radius: 3px;
  > :not(:first-child) {
    flex: 1;
  }
`;

const ToDoNote = props => {
  const completeTodo = toDo => {
    props.updateToDo({ ...toDo, isDone: !toDo.isDone });
  };

  return (
    <StyledToDoNote>
      <input
        type="checkbox"
        checked={props.isDone}
        onChange={() => completeTodo(props)}
      />
      <div>{props.title}</div>
      <button type="button" onClick={() => props.fetchToDoDetails(props.id)}>
        Fetch me some deets
      </button>
      {props.description && <div>{props.description}</div>}
      <div>{props.priority}</div>
      {props.tags && <div>{props.tags.join()}</div>}
    </StyledToDoNote>
  );
};

export default connect(
  (state, props) =>
    state.toDoDetails.id === props.id ? state.toDoDetails : {},
  {
    fetchToDoDetails: fetchToDoDetailsAction,
    updateToDo: updateToDoAction
  }
)(ToDoNote);
