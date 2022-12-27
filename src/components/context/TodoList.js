import React, { useContext } from "react";
import { Ctx } from "./Provider";

const TodoList = () => {
  const [todos, addTodo] = useContext(Ctx);
  const handleClick = () => {
    addTodo("added text");
  };
  return (
    <div className="container">
      {todos.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
      <button type="button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default TodoList;
