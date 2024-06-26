import axios from "axios";
import { toast } from "react-toastify";
import { SET_TOKEN, SET_CURRENT_USER, UNSET_CURRENT_USER } from "./LoginTypes";
import { setAxiosAuthToken, toastOnError } from "../../utils/Utils";
import {push} from "react-router-redux/lib/actions";

export const login = (userData, redirectTo) => dispatch => {
    return new Promise((resolve, reject) => {
        axios
            .post("/api/v1/auth/token/login/", userData)
            .then(response => {
                const { auth_token } = response.data;
                setAxiosAuthToken(auth_token);
                dispatch(setToken(auth_token));
                dispatch(getCurrentUser(redirectTo));
                resolve();
            })
            .catch(error => {
                dispatch(unsetCurrentUser());
                toastOnError(error);
                reject(error);
            });
    });
};

export const getCurrentUser = redirectTo => dispatch => {
    axios
        .get("/api/v1/auth/users/me/")
        .then(response => {
            const user = {
                username: response.data.username,
                email: response.data.email
            };
            dispatch(setCurrentUser(user, redirectTo));
        })
        .catch(error => {
            dispatch(unsetCurrentUser());
            toastOnError(error);
        });
};

export const setCurrentUser = (user, redirectTo) => dispatch => {
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({
        type: SET_CURRENT_USER,
        payload: user
    });

    console.log("set user" + redirectTo);
    if (redirectTo !== "") {
        dispatch(push(redirectTo));
    }
};

export const setToken = token => dispatch => {
    setAxiosAuthToken(token);
    localStorage.setItem("token", token);
    dispatch({
        type: SET_TOKEN,
        payload: token
    });
};

export const unsetCurrentUser = () => dispatch => {
    setAxiosAuthToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({
        type: UNSET_CURRENT_USER
    });
};

export const logout = () => dispatch => {
    axios
        .post("/api/v1/auth/token/logout/")
        .then(response => {
            dispatch(unsetCurrentUser());
            dispatch(push("/"));
            toast.success("Logout successful.");
        })
        .catch(error => {
            dispatch(unsetCurrentUser());
            toastOnError(error);
        });
};

export default login;