import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route, Navigate} from 'react-router-dom';
import Temp from "./components/Temp";
import SpaceCat from "./components/SpaceCat";
import RunawayCat from "./components/RunawayCat";
import MusicRectangles from "./components/MusicRectangles";
import React, { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import CatDetail from "./components/CatDetail";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

function App() {
    return (
        <div className="App">
            <Header/>
            {/*<div className="base">*/}
                {/*<div className="base">*/}
                <Routes>
                    <Route path="/music" element={<MusicRectangles />} />
                    <Route path="/runaway" element={<RunawayCat/>} />
                    {/*<Route element={<IsAuth authenticated={authenticated} />}>*/}
                    {/*    /!*<Route path="/profiles" element={<ProfilesListPage roles={roles}/>} />*!/*/}
                    {/*    /!*<Route path="/profiles/:profileId" element={<ProfilePage roles={roles}/>} />*!/*/}
                    {/*    <Route path="/agreement" element={<LicenseAgreement />} />*/}
                    {/*    */}
                    {/*</Route>*/}
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="*" element={<NotFoundPage/>}/>
                    <Route path="/cat/:slug" element={<CatDetail />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/space" element={<SpaceCat />} />
                </Routes>
            {/*</div>*/}
            <Footer />
        </div>

    );
}

export default App;
