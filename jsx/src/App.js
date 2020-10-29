import logo from "./logo.svg";
import "./App.css";

function getButtonText() {
  return "Click Me!";
}

function App() {
  const text = "Hello!";
  const objText = { text: "There!" };
  const style = { backgroundColor: "blue", color: "white" };
  return (
    <div>
      <button style={style}>{getButtonText()}</button>
      {text}
      {
        objText.text /* can't directly put an object reference here, need to point to a property of an object */
      }
    </div>
  );
}

export default App;
