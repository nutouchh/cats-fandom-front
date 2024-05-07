import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux"; // Импортируем routerReducer
import { createBrowserHistory } from 'history';

// import new reducer
// import { signupReducer } from "./components/signup/SignupReducer";

const history = createBrowserHistory();

const createRootReducer = () =>
    combineReducers({
        router: routerReducer(history), // Используем routerReducer с переданным объектом history
        // createUser: signupReducer // <--- add it here
    });

export default createRootReducer;
