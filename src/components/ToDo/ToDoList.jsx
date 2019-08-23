import React, { useState } from "react";
import { connect } from "react-redux";
import { addToDoAction } from "../../actions";
import ToDoNote from "./ToDoNote";
import styled from "styled-components";

const emptyToDo = {
  title: "",
  description: "",
  priority: 0,
  tags: ""
};

const StyledForm = styled.form`
  text-align: center;
  color: #fff;
  max-width: 460px;
  margin: 5% auto;
  font-family: "Roboto", sans-serif;

  input,
  button {
    padding: 1em;
    box-sizing: border-box;
    border: 3px solid #009688;
    width: 60%;
    height: 40px;
    line-height: 33px;
    border-radius: 5px;
    font-size: 14px;
    margin: 0.2em;
    color: #639;
    cursor: pointer;
  }

  button {
    padding: 0;
    font-weight: bold;
    color: #fff;
    background-color: #009688;
  }
`;

const StyledError = styled.h4`
  color: red;
  text-align: center;
`;

const ToDoList = props => {
  const [newToDo, setNewToDo] = useState({ ...emptyToDo });

  const onChange = property => e => {
    setNewToDo({ ...newToDo, [property]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    props.addToDo(newToDo);
    setNewToDo({ ...emptyToDo });
  };

  return (
    <div>
      <ul style={{ paddingInlineStart: 0 }}>
        {props.toDos.map((toDo, index) => {
          return <ToDoNote key={index} {...toDo} />;
        })}
      </ul>
      {props.error && <StyledError>{props.error}</StyledError>}
      <StyledForm onSubmit={onSubmit}>
        <input
          placeholder="What do to next?"
          required
          onChange={onChange("title")}
          value={newToDo.title}
        />
        <input
          placeholder="details..."
          onChange={onChange("description")}
          value={newToDo.description}
        />
        <input
          type="number"
          onChange={onChange("priority")}
          value={newToDo.priority}
        />
        <input
          type="tags"
          placeholder="you wanna buy some tags?"
          onChange={onChange("tags")}
          value={newToDo.tags}
        />
        <button type="submit"> Add ToDo </button>
      </StyledForm>
    </div>
  );
};

export default connect(
  state => ({
    toDos: state.toDos.data,
    error: state.toDos.error
  }),
  {
    addToDo: addToDoAction
  }
)(ToDoList);
