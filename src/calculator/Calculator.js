import React, { useState } from "react";
import "./calc.css";
const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["+", "-", "/", "*", "."];
  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!calc.includes(value)) {
      // eslint-disable-next-line no-eval
      setResult(eval(calc + value).toString());
    }
  };
  const calculate = () => {
    // eslint-disable-next-line no-eval
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };
  const clear = () => {
    setResult("0");
    setCalc("0");
  };
  const createDigit = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          key={i}
          className="btn btn-outline-warning"
          onClick={() => updateCalc(i.toString())}
        >
          {i}
        </button>
      );
    }
    return digits;
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-5 mx-auto">
          <div className="card p-5 bg-secondary">
            <div className="card mb-2">
              <p className="text-center">
                {result ? <span>({result})</span> : ""} &nbsp;
                {calc || "0"}
              </p>
            </div>
            <div className="operator d-lg-flex justify-content-between my-2 bg-warning p-2">
              <button
                className="btn btn-outline-light fs-5 m-2"
                onClick={() => updateCalc("+")}
              >
                +
              </button>
              <button
                className="btn btn-outline-light fs-5 m-2"
                onClick={() => updateCalc("-")}
              >
                -
              </button>
              <button
                className="btn btn-outline-light fs-5 m-2"
                onClick={() => updateCalc("*")}
              >
                *
              </button>
              <button
                className="btn btn-outline-light fs-5 m-2"
                onClick={() => updateCalc("/")}
              >
                /
              </button>
              <button className="btn btn-outline-light" onClick={deleteLast}>
                Del
              </button>
              <button className="btn btn-outline-light" onClick={clear}>
                Clear
              </button>
            </div>
            <div className="digit">
              {createDigit()}
              <button
                className="btn btn-outline-warning"
                onClick={() => updateCalc("0")}
              >
                0
              </button>
              <button
                className="btn btn-outline-warning"
                onClick={() => updateCalc(".")}
              >
                .
              </button>
              <button className="btn btn-outline-warning" onClick={calculate}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
