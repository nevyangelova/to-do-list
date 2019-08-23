import React, { useEffect } from "react";
import { Provider, connect } from "react-redux";
import ToDoList from "./ToDo/ToDoList";
import { createGlobalStyle } from "styled-components";

import Header from "./Header.jsx";
import { fetchToDosAction } from "../actions";

const GlobalStyle = createGlobalStyle`
  body {
    min-width: 320px;
  }
`;

// TODO fix all console errors and warnings.
const App = props => {
  useEffect(() => {
    props.fetchToDos();
  });

  return (
    <Provider store={props.store}>
      <div>
        <GlobalStyle />

        <Header />
        <div className="view">Some todos should be here</div>
        <ToDoList />
      </div>
    </Provider>
  );
};

export default connect(
  state => ({}),
  {
    fetchToDos: fetchToDosAction
  }
)(App);
