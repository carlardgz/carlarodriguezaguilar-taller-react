import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

// const Header = ({ course }) => {
//   return (
//     <div>
//       <h1>{course}</h1>
//     </div>
//   );
// };

// const Content = ({ parts, exercises }) => {
//   return (
//     <div>
//       {parts.map((part) => {
//         return <p>{part}</p>;
//       })}
//       <ul>
//         {exercises.map((exercise) => {
//           return <li>{exercise}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// const Total = ({ totalExercises }) => {
//   return (
//     <div>
//       <p>{totalExercises}</p>
//     </div>
//   );
// };

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const part2 = "Passing data through props";
  const part3 = "State of a component";
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  const courseInfo = [
    { key: "fundamentals", part: "Fundamentals of React", exercises: 10 },
    { key: "props", part: "Passing data through props", exercises: 7 },
    { key: "state", part: "State of a component", exercises: 14 },
    { key: "fetch", part: "Fetching resources from an API", exercises: 9 },
  ];

  return (
    <div>
      <Header title={course} />
      <Content courseInfo={courseInfo} />
      <Total courseInfo={courseInfo} />
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
