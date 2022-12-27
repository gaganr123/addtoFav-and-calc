import React, { createContext, useState } from "react";
export const Ctx = createContext(null);
const Provider = ({ children }) => {
  const [todos, setTodos] = useState(["first", "second", "third"]);
  const addTodo = (value) => {
    setTodos([...todos, value]);
  };
  return (
    <div className="container">
      <Ctx.Provider value={[todos, addTodo]}>{children}</Ctx.Provider>
    </div>
  );
};

export default Provider;
