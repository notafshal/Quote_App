import { useState } from "react";
import "./App.css";
const quotes = [
  "Just one small positive thought in the morning can change your whole day.",
  "Opportunities don't happen, you create them.",
  "It is never too late to be what you might have been",
];

const App = () => {
  const [change, setChange] = useState(0);
  const [points, setPoints] = useState([0, 0, 0]);

  const highestVote = Math.max(...points);
  const highest = points.indexOf(highestVote);
  const vote = () => {
    const copy = [...points];
    copy[change] += 1;
    setPoints(copy);
  };

  return (
    <>
      <h1>Quote of the Day</h1>
      <div className="container">
        <div> {quotes[highest]}</div>
        <p> has {points[change]} vote</p>
      </div>
      <h1>Quote </h1>
      <div className="container">
        {quotes[change]}
        <br />
        has {points[change]} votes <br />
        <button
          onClick={() => {
            if (change === quotes.length - 1) {
              setChange(0);
            } else {
              setChange(change + 1);
            }
          }}
        >
          Next quote
        </button>
        <button onClick={vote}>Vote</button>
      </div>
    </>
  );
};

export default App;
