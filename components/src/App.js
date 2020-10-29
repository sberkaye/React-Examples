import logo from "./logo.svg";
import "./App.css";
import Faker from "faker";

function App() {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={Faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            John
          </a>
          <div className="metadata">
            <span className="date">Today at 5:30PM</span>
          </div>
          <div className="text">Nice job!</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={Faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            John
          </a>
          <div className="metadata">
            <span className="date">Today at 5:30PM</span>
          </div>
          <div className="text">Nice job!</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={Faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            John
          </a>
          <div className="metadata">
            <span className="date">Today at 5:30PM</span>
          </div>
          <div className="text">Nice job!</div>
        </div>
      </div>
    </div>
  );
}

export default App;
