export function handleOptionChange(selectedOption, setState) {
    setState((prevState) => ({ selectedOption }));
}

export function handleFormSubmit(e, checkAnswer, handleNextQuestion) {
    e.preventDefault();
    checkAnswer();
    handleNextQuestion();
}

export function checkAnswer(selectedOption, questionBank, currentQuestion, setState) {
    const { answer } = questionBank[currentQuestion];
    if (selectedOption === answer) {
        setState((prevState) => ({ score: prevState.score + 1 }));
    }
}

export function handleNextQuestion(questionBank, currentQuestion, setState) {
    if (currentQuestion + 1 < questionBank.length) {
        setState((prevState) => ({
            currentQuestion: prevState.currentQuestion + 1,
            selectedOption: "",
        }));
    } else {
        setState({
            quizEnd: true,
        });
    }
}