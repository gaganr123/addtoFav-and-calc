import React, { useRef } from "react";

const Practice = () => {
  const inputRef = useRef(null);
  const handleRef = () => {
    alert(inputRef.current.value);
    // inputRef.current.focus();
  };
  return (
    <div className="text-center mt-4">
      <p>Useref</p>
      <input ref={inputRef} type="text" placehoder="type here" id="name" />
      <button type="button" onClick={handleRef}>
        Click me
      </button>
    </div>
  );
};

export default Practice;
