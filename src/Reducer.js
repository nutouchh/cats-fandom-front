import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux"; // Импортируем routerReducer
import { createBrowserHistory } from 'history';

// import new reducer
import { signupReducer } from "./components/signup/SignupReducer";
import { loginReducer } from "./components/login/LoginReducer";
const history = createBrowserHistory();

const createRootReducer = () =>
    combineReducers({
        router: routerReducer(history),
        createUser: signupReducer,
        auth: loginReducer
    });

export default createRootReducer;
