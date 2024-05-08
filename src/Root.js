import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { setCurrentUser, setToken } from "./components/login/LoginActions";

import rootReducer from "./Reducer";
import {isEmpty} from "./utils/Utils";

const Root = ({ children, initialState = {} }) => {
    const history = createBrowserHistory();
    const middleware = [thunk, routerMiddleware(history)];

    const store = createStore(
        rootReducer(history),
        initialState,
        applyMiddleware(...middleware)
    );

    // check localStorage
    if (!isEmpty(localStorage.getItem("token"))) {
        store.dispatch(setToken(localStorage.getItem("token")));
    }
    if (!isEmpty(localStorage.getItem("user"))) {
        const user = JSON.parse(localStorage.getItem("user"));
        store.dispatch(setCurrentUser(user, ""));
    }

    return (
        <Provider store={store}>
            <Router history={history}>{children}</Router>
        </Provider>
    );
};

export default Root;
