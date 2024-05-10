import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "react-toastify/dist/ReactToastify.css";
import Root from "./Root";
import theme from './theme'

import { ConfigProvider} from "antd";

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <React.StrictMode>
        <ConfigProvider
            theme={
                theme
             }
        >
        <Root>
                <App/>
        </Root>
        </ConfigProvider>
    </React.StrictMode>
);

reportWebVitals();
