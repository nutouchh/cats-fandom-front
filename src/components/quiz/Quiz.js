import React, { useState, useEffect } from 'react';

function Quiz({ questions }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [selectedQuestions, setSelectedQuestions] = useState([]);

    useEffect(() => {
        const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
        const selected = shuffledQuestions.slice(0, 5);
        setSelectedQuestions(selected);
    }, [questions]);

    useEffect(() => {
        console.log("selectedQuestions:", selectedQuestions);
        console.log("currentQuestion:", currentQuestion);
    }, [selectedQuestions, currentQuestion]);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < selectedQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    if (selectedQuestions.length === 0) {
        return <div>Loading...</div>; // Display a loading message while questions are being loaded
    }

    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    <p>You scored {score} out of {selectedQuestions.length}</p>
                    <a href="/quiz">Пройти еще раз</a>
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{selectedQuestions.length}
                        </div>
                        <div className='question-text'>{selectedQuestions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {selectedQuestions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                                {answerOption.answerText}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Quiz;
