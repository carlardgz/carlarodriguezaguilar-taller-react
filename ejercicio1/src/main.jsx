import React from "react";
import ReactDOM from "react-dom/client";

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Content = ({ parts, exercises }) => {
  return (
    <div>
      {parts.map((part) => {
        return <p>{part}</p>;
      })}
      <ul>
        {exercises.map((exercise) => {
          return <li>{exercise}</li>;
        })}
      </ul>
    </div>
  );
};

const Total = ({ totalExercises }) => {
  return (
    <div>
      <p>{totalExercises}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    "Fundamentals of React",
    "Using props to pass data",
    "State of a component",
  ];
  const exercises = [10, 7, 14];
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total totalExercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
