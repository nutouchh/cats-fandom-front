import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route, Navigate} from 'react-router-dom';
import Temp from "./components/Temp";
import SpaceCat from "./components/SpaceCat";
import RunawayCat from "./components/RunawayCat";
import MusicRectangles from "./components/MusicRectangles";
import React from "react";
import './index.css'
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import CatDetail from "./components/CatDetail";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import axios from "axios";
import {useSelector} from "react-redux";
import questions from "./components/quiz/Questions";
import Quiz from "./components/quiz/Quiz";
import CreateCatForm from "./pages/CreateCatForm";
import AddCatSuccessPage from "./pages/AddCatSuccessPage";
import UserProfilePage from "./pages/UserProfilePage";
import UserArticles from "./components/profile/UserArticles";
import UpdateCatForm from "./pages/UpdateCatForm";
import ParticlesComponent from "./components/Particles";
axios.defaults.baseURL = "http://78.24.223.20:8000";


function App() {
    const { isAuthenticated } = useSelector(state => state.auth);
    return (
        <div className="App">
            <ParticlesComponent style={{position: "absolute", top: 0, left: 0, zIndex: -1}} id="particles"/>
            {/*<ToastContainer*/}
            {/*    hideProgressBar={true}*/}
            {/*    newestOnTop={true}*/}
            {/*    style={{ display: 'none' }}*/}
            {/*/>*/}
            <Header/>
            <Routes>
                <Route path="/runaway" element={<RunawayCat />} />
                <Route path="/quiz" element={<Quiz questions={questions} />} />
                <Route path="/music" element={<MusicRectangles />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/cat/:slug" element={<CatDetail />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/space" element={<SpaceCat />} />
                <Route path="/createcat" element={<CreateCatForm />} />
                <Route path="/updatecat/:slug" element={isAuthenticated ? <UpdateCatForm /> : <Navigate to="/login?next=/updatecat/:slug" />} />
                <Route path="/success" element={isAuthenticated ? <AddCatSuccessPage /> : <Navigate to="/login?next=/success" />} />
                <Route path="/profile" element={isAuthenticated ? <UserProfilePage /> : <Navigate to="/login?next=/profile" />} />
                <Route path="/user_articles" element={isAuthenticated ? <UserArticles /> : <Navigate to="/login?next=/user_articles" />} />
            </Routes>
            <Footer />
        </div>

    );
}

export default App;