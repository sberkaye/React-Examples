import "./App.css";
import Faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="John"
          time="Today at 3:00PM"
          text="Nice job!"
          image={Faker.image.avatar()}
        />
      </ApprovalCard>
      <CommentDetail
        author="Mary"
        time="Today at 7:00PM"
        text="Great content!"
        image={Faker.image.avatar()}
      />
      <CommentDetail
        author="Jack"
        time="Yesterday at 3:00PM"
        text="Well done!"
        image={Faker.image.avatar()}
      />
    </div>
  );
}

export default App;
