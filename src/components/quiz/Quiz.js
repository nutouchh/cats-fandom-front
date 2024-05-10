import React, { useState, useEffect } from 'react';
import { Button, Typography } from 'antd';
import {Container} from "react-bootstrap";
import ParticlesComponent from "../Particles";

const { Title, Text } = Typography;

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
        <Container style={{position: "relative", height: "100vh", backgroundColor: "none"}}>
            {/*<ParticlesComponent style={{position: "absolute", top: 0, left: 0, zIndex: -1}} id="particles"/>*/}
            {/*<div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>*/}
                <div>
                {showScore ? (
                    <div className='score-section'>
                        <Title level={2}>Ваш счет {score} / {selectedQuestions.length}</Title>
                        <Button href="/quiz">Попробовать снова</Button><br/>
                        <Text style={{fontSize: '10px'}}>*вопросы не повторяются</Text>
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <Title level={2}>Вопрос {currentQuestion + 1} / {selectedQuestions.length}</Title>
                            <Text style={{fontSize: '20px'}}>{selectedQuestions[currentQuestion].questionText}</Text>
                        </div>
                        <br/>
                        <div className='answer-section'>
                            {selectedQuestions[currentQuestion].answerOptions.map((answerOption, index) => (
                                <Button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                                        style={{margin: '8px'}}>
                                    {answerOption.answerText}
                                </Button>
                            ))}
                        </div>
                    </>
                )}</div>
        {/*</div>*/}
        </Container>
    );
}

export default Quiz;
