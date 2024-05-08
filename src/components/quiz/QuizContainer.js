import React from "react";
// import Question from "./components/quiz/Question";
// import Score from "./components/quiz/Score";
import { handleOptionChange, handleFormSubmit, handleNextQuestion, checkAnswer } from "./QuizLogic";
import Question from "./Question";
import Score from "./Score";

function QuizContainer({ questionBank, currentQuestion, selectedOption, score, quizEnd, setState }) {
    return (
        <div className="App d-flex flex-column align-items-center justify-content-center">
            <h1 className="app-title">QUIZ APP</h1>
            {!quizEnd ? (
                <Question
                    question={questionBank[currentQuestion]}
                    selectedOption={selectedOption}
                    onOptionChange={(e) => handleOptionChange(e.target.value, setState)}
                    onSubmit={(e) =>
                        handleFormSubmit(
                            e,
                            () => checkAnswer(selectedOption, questionBank, currentQuestion, setState),
                            () => handleNextQuestion(questionBank, currentQuestion, setState)
                        )
                    }
                />
            ) : (
                <Score
                    score={score}
                    onNextQuestion={() => handleNextQuestion(questionBank, currentQuestion, setState)}
                    className="score"
                />
            )}
        </div>
    );
}

export default QuizContainer;