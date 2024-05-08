import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route, Navigate} from 'react-router-dom';
import Temp from "./components/Temp";
import SpaceCat from "./components/SpaceCat";
import RunawayCat from "./components/RunawayCat";
import MusicRectangles from "./components/MusicRectangles";
import React, {Component, useEffect, useState} from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { ToastContainer } from "react-toastify";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import CatDetail from "./components/CatDetail";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import requireAuth from "./utils/RequireAuth";


import Question from "./components/quiz/Question";
import qBank from "./components/quiz/QuestionBank";
import Score from "./components/quiz/Score";
import {checkAnswer, handleFormSubmit, handleNextQuestion, handleOptionChange} from "./components/quiz/QuizLogic";
import QuizContainer from "./components/quiz/QuizContainer";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000";

// function App() {
//
//
//     return (
//         <div className="App">
//             <ToastContainer hideProgressBar={true} newestOnTop={true} />
//             <Header/>
//             {/*<div className="base">*/}
//                 {/*<div className="base">*/}
//                 <Routes>
//                     <Route path="/music" element={<MusicRectangles />} />
//                     <Route path="/runaway" element={<RunawayCat/>} />
//                     {/*<Route element={<IsAuth authenticated={authenticated} />}>*/}
//                     {/*    /!*<Route path="/profiles" element={<ProfilesListPage roles={roles}/>} />*!/*/}
//                     {/*    /!*<Route path="/profiles/:profileId" element={<ProfilePage roles={roles}/>} />*!/*/}
//                     {/*    <Route path="/agreement" element={<LicenseAgreement />} />*/}
//                     {/*    */}
//                     {/*</Route>*/}
//                     <Route path="/signup" element={<Signup/>} />
//                     <Route path="/login" element={<Login/>} />
//                     <Route path="*" element={<NotFoundPage/>}/>
//                     <Route path="/cat/:slug" element={<CatDetail />} />
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="/space" element={<SpaceCat />} />
//                 </Routes>
//             {/*</div>*/}
//             <Footer />
//         </div>
//
//     );
// }

// export default App;

const AuthenticatedMusicRectangles = requireAuth(MusicRectangles);
const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    return token !== null;
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionBank: qBank,
            currentQuestion: 0,
            selectedOption: "",
            score: 0,
            quizEnd: false,
        };
    }

    render() {
        const { questionBank, currentQuestion, selectedOption, score, quizEnd } = this.state;
        return (
            <div className="App">
                <ToastContainer hideProgressBar={true} newestOnTop={true}/>
                <Header/>
                {/*<div className="base">*/}
                {/*<div className="base">*/}
                <Routes>
                    {/*<Route path="/music" element={requireAuth(<MusicRectangles/>)} />*/}
                    {/*<Route path="/music" component={requireAuth(<MusicRectangles/>)}/>*/}
                    {/*<Route path="/music" element={() => requireAuth(<MusicRectangles />)} />*/}
                    {/*<Route path="/music" element={requireAuth(Component={MusicRectangles})} />*/}
                    {/*<Route path="/music" element={requireAuth(MusicRectangles)} />*/}
                    <Route path="/runaway" element={<RunawayCat/>}/>
                    {/*<Route path="/music" element={requireAuth(<MusicRectangles />)} />*/}

                    {/*<Route path="/music" element={<AuthenticatedMusicRectangles />} />*/}
                    {/*<Route element={<IsAuth authenticated={authenticated} />}>*/}
                    {/*    <Route path="/music" element={<MusicRectangles />} />*/}
                    {/*    /!*<Route path="/profiles" element={<ProfilesListPage roles={roles}/>} />*!/*/}
                    {/*    /!*<Route path="/profiles/:profileId" element={<ProfilePage roles={roles}/>} />*!/*/}
                    {/*    /!*<Route path="/agreement" element={<LicenseAgreement />} />*!/*/}

                    {/*</Route>*/}
                    <Route
                        path="/music"
                        element={isAuthenticated() ? <MusicRectangles /> : <Navigate to="/login?next=music" />}
                    />
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                    <Route path="/cat/:slug" element={<CatDetail/>}/>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/space" element={<SpaceCat/>}/>
                    <Route path="/quiz" element={<QuizContainer
                        questionBank={questionBank}
                        currentQuestion={currentQuestion}
                        selectedOption={selectedOption}
                        score={score}
                        quizEnd={quizEnd}
                        setState={this.setState.bind(this)}
                    />}/>
                </Routes>
                {/*</div>*/}
                <Footer/>

            </div>

    )
        ;
    }
}

export default App;