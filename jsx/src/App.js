import logo from "./logo.svg";
import "./App.css";

function getButtonText() {
  return "Click Me!";
}

function App() {
  const text = "Hello!";
  const objText = { text: "There!" };
  return (
    <div>
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getButtonText()}
      </button>
      {text}
      {objText.text}
    </div>
  );
}

export default App;
