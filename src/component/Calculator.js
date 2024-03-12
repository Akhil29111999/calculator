import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => text + val);
  };

  const calculateResult = () => {
    const operators = /[+\-*/]/;
    const operands = text.split(operators);

    if (operands.length !== 2 || isNaN(parseFloat(operands[0])) || isNaN(parseFloat(operands[1]))) {
      setResult("Invalid expression");
      return;
    }

    const operatorIndex = text.split("").findIndex((char) => operators.test(char));
    const operator = text[operatorIndex];
    let result;

    switch (operator) {
      case "+":
        result = parseFloat(operands[0]) + parseFloat(operands[1]);
        break;
      case "-":
        result = parseFloat(operands[0]) - parseFloat(operands[1]);
        break;
      case "*":
        result = parseFloat(operands[0]) * parseFloat(operands[1]);
        break;
      case "/":
        if (parseFloat(operands[1]) === 0) {
          setResult("Division by zero");
          return;
        }
        result = parseFloat(operands[0]) / parseFloat(operands[1]);
        break;
      default:
        setResult("Invalid operator");
        return;
    }

    setResult(result.toString());
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  const buttonColor = "#f2a33c";

  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="input-wrapper">
          <div className="result">
            <h1>{result}</h1>
          </div>
          <div className="text">
            <h3>{text}</h3>
          </div>
        </div>
        <div className="row">
          <div onClick={() => addToText("7")} className="button-wrapper"> 7 </div>
          <div onClick={() => addToText("8")} className="button-wrapper"> 8 </div>
          <div onClick={() => addToText("9")} className="button-wrapper"> 9 </div>
          <div onClick={() => addToText("/")} className="button-wrapper" style={{ backgroundColor: buttonColor }}> / </div>
        </div>

        <div className="row">
          <div onClick={() => addToText("4")} className="button-wrapper"> 4 </div>
          <div onClick={() => addToText("5")} className="button-wrapper"> 5 </div>
          <div onClick={() => addToText("6")} className="button-wrapper"> 6 </div>
          <div onClick={() => addToText("*")} className="button-wrapper" style={{ backgroundColor: buttonColor }}> * </div>
        </div>

        <div className="row">
          <div onClick={() => addToText("1")} className="button-wrapper"> 1 </div>
          <div onClick={() => addToText("2")} className="button-wrapper"> 2 </div>
          <div onClick={() => addToText("3")} className="button-wrapper"> 3 </div>
          <div onClick={() => addToText("+")} className="button-wrapper" style={{ backgroundColor: buttonColor }}> + </div>
        </div>

        <div className="row">
          <div onClick={() => addToText("0")} className="button-wrapper"> 0 </div>
          <div onClick={() => addToText(".")} className="button-wrapper"> . </div>
          <div onClick={calculateResult} className="button-wrapper"> = </div>
          <div onClick={() => addToText("-")} className="button-wrapper" style={{ backgroundColor: buttonColor }}> - </div>
        </div>

        <div onClick={resetInput} className="button-wrapper" style={{ backgroundColor: "red" }}>
          Clear
        </div>
      </div>
    </div>
  );
};

export default Calculator;
