import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/button/button";
import QuestionAndAnswer from "./components/questionAndAnswer/questionAndAnswer";
import { QuizData } from "./components/questionAndAnswer/questionAndAnswer";
import { nanoid } from "nanoid";

function App() {
  const [click, setClick] = useState<boolean>(false);
  const [quizData, setQuizData] = useState<QuizData[]>();

  const fetchData = async () => {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=5&category=31&type=multiple"
    );
    const data = await response.json();
    setQuizData(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(quizData);

  const questionAndAnswerElements = quizData?.map((ele) => {
    return <QuestionAndAnswer quizData={ele} key={nanoid()} />;
  });

  return (
    <div className="App">
      <h1 className="title">Anime and Manga Quiz</h1>
      {click === false && <Button value={click} setValue={setClick} />}
      {click === true && questionAndAnswerElements}
    </div>
  );
}

export default App;
