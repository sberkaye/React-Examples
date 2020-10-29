import logo from "./logo.svg";
import "./App.css";

function getButtonText() {
  return "Click Me!";
}

function App() {
  const text = "Hello!";
  return (
    <div>
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getButtonText()}
      </button>
      {text}
    </div>
  );
}

export default App;
