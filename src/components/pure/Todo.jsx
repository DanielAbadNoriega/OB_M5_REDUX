import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, text, id }) => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-throught" : "",
        textDecorationColor: completed ? "lightgreen" : "lightgrey",
        color: completed ? "white" : "tomato",
      }}
    >
      <span style={{ fontWeight: "bold" }}>{id} -</span> {text}
    </li>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Todo;
