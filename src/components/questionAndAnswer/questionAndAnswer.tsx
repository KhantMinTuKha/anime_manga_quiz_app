import { useState } from "react";
import { nanoid } from "nanoid";
import "./questionAndAnswer.css";

export interface QuizData {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

interface Props {
  quizData: QuizData;
}

const QuestionAndAnswer = ({ quizData }: Props) => {
  const answer = quizData.incorrect_answers;
  answer.push(quizData.correct_answer);

  function randomize(values: any) {
    let index = values.length,
      randomIndex;
    while (index != 0) {
      randomIndex = Math.floor(Math.random() * index);
      index--;
      [values[index], values[randomIndex]] = [
        values[randomIndex],
        values[index],
      ];
    }
    return values;
  }
  randomize(answer);

  const handleClick = (ele: string) => {
    let clickedAnswer = ele;
    if (clickedAnswer === quizData.correct_answer) {
      document.getElementById(ele)?.classList.add("correct_answer");
    }
  };

  const answerElements = answer.map((ele) => {
    return (
      <button
        value={ele}
        key={nanoid()}
        className="answer"
        id={ele}
        onClick={() => handleClick(ele)}
      >
        {ele}
      </button>
    );
  });

  return (
    <div className="questionAndAnswerContainer">
      <p className="difficulty">{quizData.difficulty}</p>
      <div className="question">{quizData.question}</div>
      <div className="answersContainer">{answerElements}</div>
    </div>
  );
};

export default QuestionAndAnswer;
