import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let feedback;
  feedback = <h1>Give feedback</h1>;

  let statistics;
  statistics = <h1>Statistics</h1>;

  const goodCounter = () => setGood(good + 1);
  const neutralCounter = () => setNeutral(neutral + 1);
  const badCounter = () => setBad(bad + 1);

  let all = good + neutral + bad;

  let average = (good - bad) / all;

  let positive = (good / all) * 100;

  return (
    <div>
      <div>{feedback}</div>
      <button onClick={goodCounter}>Good</button>
      <button onClick={neutralCounter}>Neutral</button>
      <button onClick={badCounter}>Bad</button>
      <div>{statistics}</div>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>All: {all}</div>
      <div>Average: {average}</div>
      <div>Positive: {positive}%</div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
