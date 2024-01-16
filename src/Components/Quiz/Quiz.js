import React, { useState } from "react";

function Quiz() {
  const [currentScore, setCurrentScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState(false);
  const questions = [
    {
      question: "What is HTML?",
      options: [
        { id: 1, answer: "HyperText Markup Language", isCorrect: true },
        { id: 2, answer: "HyperText Modeling Language", isCorrect: false },
        { id: 3, answer: "HighTech Multimedia Language", isCorrect: false },
      ],
    },
    {
      question: "What does CSS stand for?",
      options: [
        { id: 1, answer: "Creative Styling Solutions", isCorrect: false },
        { id: 2, answer: "Cascading Style Sheets", isCorrect: true },
        { id: 3, answer: "Computer Style System", isCorrect: false },
      ],
    },
    {
      question: "What is JavaScript used for?",
      options: [
        { id: 1, answer: "Server-side scripting", isCorrect: false },
        { id: 2, answer: "Document storage", isCorrect: false },
        { id: 3, answer: "Client-side interactivity", isCorrect: true },
      ],
    },
    {
      question: "What is responsive web design?",
      options: [
        { id: 1, answer: "Fixed layout for all devices", isCorrect: false },
        { id: 2, answer: "Adaptable to different devices", isCorrect: true },
        { id: 3, answer: "Only for mobile devices", isCorrect: false },
      ],
    },
    {
      question: "What is the purpose of AJAX in web development?",
      options: [
        { id: 1, answer: "Asynchronous data exchange", isCorrect: true },
        { id: 2, answer: "Synchronous document loading", isCorrect: false },
        { id: 3, answer: "Audio and video integration", isCorrect: false },
      ],
    },
  ];

  function answerFn(isCorrect) {
    if (isCorrect) {
      setCurrentScore(currentScore + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setResult(true);
    }
  }

  function resultFn() {
    setResult(false);
    setCurrentScore(0);
    setCurrentQuestion(0);
  }
  return (
    <div className="Container w-[100%] flex flex-col justify-center items-center bg-[#e9e6e5] gap-[20px] ">
        <div className="bg-[#718355] w-[900px]  rounded-[8px] ">
            <h1 className="text-[40px] text-center">Quiz</h1>
        </div>
      <div className="main w-[900px] h-[600px] flex justify-center items-center rounded-[8px] bg-[#718355]">
        <div className="mainAll  h-[80%] w-[80%] rounded-[8px] bg-[#87986a] flex flex-col  items-center">
          {result ? (
            <div className="result flex flex-col h-[50%] w-[50%] mt-[120px] bg-[#97a97c] rounded-[8px] items-center justify-center">
              <p className="text-[25px]">
                Your Score: {currentScore} of {questions.length}{" "}
              </p>
              <button
                className="bg-[#cfe1b9]  flex justify-center px-[35px] text-[25px] rounded-[10px] mt-[20px] py-[5px] "
                onClick={resultFn}
              >
                Restart
              </button>
            </div>
          ) : (
            <div className="questions  h-[100%]  items-center w-[80%]  flex flex-col ">
              <div className="scoreQuestionNumber  items-center mb-[40px] mt-[20px] w-[60%] h-[20%] flex flex-col  ">
                <h1 className="flex justify-center  w-[83%]">Score: {currentScore}</h1>
                <h1 className=" w-[83%]  flex justify-center ">
                  Question {currentQuestion} of {questions.length}
                </h1>
              </div>
              <p className="text-[25px]  w-[110%] text-center ">
                {questions[currentQuestion].question}
              </p>
              <div className="answers w-[100%] mt-[80px]">
                <div className="flex flex-col w-[100%] h-[110%]  items-center justify-center gap-[10px]">
                  {questions[currentQuestion].options.map((option) => {
                    return (
                      <button
                        className="bg-[#e9f5db] w-[80%] flex justify-center px-[40px] text-[20px] rounded-[7px]  py-[5px]  "
                        onClick={() => answerFn(option.isCorrect)}
                        key={option.id}
                      >
                        {option.answer}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
