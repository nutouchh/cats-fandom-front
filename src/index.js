import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import store from './store'
import reportWebVitals from './reportWebVitals';
// import {BrowserRouter} from "react-router-dom"
// import {Provider} from "react-redux";
// import './index.css';
// import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import Root from "./Root";
import theme from './theme'

import { ConfigProvider} from "antd";

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <React.StrictMode>
        {/*<Provider store={store}>*/}
        {/*    <BrowserRouter>*/}
        <ConfigProvider
            theme={
                theme
             }
            // theme={{
            //     token: {
            //         fontFamily: "DotGothic16"
            //     }
            // }}
        >
        <Root>
                <App/>
        </Root>
        </ConfigProvider>
            {/*</BrowserRouter>*/}
        {/*</Provider>*/}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
