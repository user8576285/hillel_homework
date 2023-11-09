import { useReducer } from "react";
import "./App.css";

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "RESET":
        return 0;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, 0);

  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const handleReset = () => {
    dispatch({
      type: "RESET",
    });
  };

  return (
    <div className="App">
      <h1>Counter:{state}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default App;
