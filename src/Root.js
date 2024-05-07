import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";

import rootReducer from "./Reducer";

const Root = ({ children, initialState = {} }) => {
    const history = createBrowserHistory();
    const middleware = [thunk, routerMiddleware(history)];

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    );

    return (
        <Provider store={store}>
            <Router>{children}</Router>
        </Provider>
    );
};

export default Root;
