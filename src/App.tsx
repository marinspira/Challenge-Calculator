import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [previousNumber, setPreviousNumber] = useState(null);
  const [operator, setOperator] = useState(null);

  function handleDigit(digit: number) {
    setInput(input + digit);
  }

  function handleOperatorClick(operator: string) {
    if (operator && previousNumber !== null) {
      calculate();
    }
    setOperator(operator);
    setPreviousNumber(parseFloat(input));
    setInput("");
  }

  function calculate() {
    if (operator && previousNumber !== null) {
      let result: any;
      const nextNumber: any = parseFloat(input);

      switch (operator) {
        case "+":
          result = previousNumber + nextNumber;
          break;
        case "-":
          result = previousNumber - nextNumber;
          break;
        case "*":
          result = previousNumber * nextNumber;
          break;
        default:
          return;
      }

      setResult(result);
      setOperator(null);
      setInput("");
    }
  }

  function clear() {
    setInput("");
    setResult(null);
    setPreviousNumber(null);
  }

  return (
    <>
      <h2>Calculadora</h2>
      <p>Result: {result}</p>
      <input value={input} />
      <div className="buttons">
        <button onClick={clear}>C</button>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit: number) => {
          return (
            <button key={digit} onClick={() => handleDigit(digit)}>
              {digit}
            </button>
          );
        })}
        <button onClick={() => handleOperatorClick("-")}>-</button>
        <button onClick={() => handleOperatorClick("+")}>+</button>
        <button onClick={() => handleOperatorClick("*")}>*</button>
        <button onClick={calculate}>=</button>
      </div>
    </>
  );
}
