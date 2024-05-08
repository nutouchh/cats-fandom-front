// import axios from "axios";
// import { push } from "connected-react-router";
// import { toast } from "react-toastify";
// import { SET_TOKEN, SET_CURRENT_USER, UNSET_CURRENT_USER } from "./LoginTypes";
// import { setAxiosAuthToken, toastOnError } from "../../utils/Utils";
//
// export const login = (userData, redirectTo) => dispatch => {
//     axios
//         .post("/api/v1/auth/token/login/", userData)
//         .then(response => {
//             const { auth_token } = response.data;
//             setAxiosAuthToken(auth_token);
//             dispatch(setToken(auth_token));
//             dispatch(getCurrentUser(redirectTo));
//         })
//         .catch(error => {
//             dispatch(unsetCurrentUser());
//             toastOnError(error);
//         });
// };
//
// export const getCurrentUser = redirectTo => dispatch => {
//     axios
//         .get("/api/v1/auth/users/me/")
//         .then(response => {
//             const user = {
//                 username: response.data.username,
//                 email: response.data.email
//             };
//             dispatch(setCurrentUser(user, redirectTo));
//         })
//         .catch(error => {
//             dispatch(unsetCurrentUser());
//             toastOnError(error);
//         });
// };
//
// export const setCurrentUser = (user, redirectTo) => dispatch => {
//     localStorage.setItem("user", JSON.stringify(user));
//     dispatch({
//         type: SET_CURRENT_USER,
//         payload: user
//     });
//
//     console.log("set user" + redirectTo);
//     if (redirectTo !== "") {
//         dispatch(push(redirectTo));
//     }
// };
//
// export const setToken = token => dispatch => {
//     setAxiosAuthToken(token);
//     localStorage.setItem("token", token);
//     dispatch({
//         type: SET_TOKEN,
//         payload: token
//     });
// };
//
// export const unsetCurrentUser = () => dispatch => {
//     setAxiosAuthToken("");
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     dispatch({
//         type: UNSET_CURRENT_USER
//     });
// };
//
// export const logout = () => dispatch => {
//     axios
//         .post("/api/v1/auth/token/logout/")
//         .then(response => {
//             dispatch(unsetCurrentUser());
//             dispatch(push("/"));
//             toast.success("Logout successful.");
//         })
//         .catch(error => {
//             dispatch(unsetCurrentUser());
//             toastOnError(error);
//         });
// };




// import axios from "axios";
// import { toast } from "react-toastify";
// import { SET_TOKEN, SET_CURRENT_USER, UNSET_CURRENT_USER } from "./LoginTypes";
// import { setAxiosAuthToken, toastOnError } from "../../utils/Utils";
// import {push} from "react-router-redux";
//
// export const login = (userData, redirectTo, history) => dispatch => {
//     axios
//         .post("/api/v1/auth/token/login/", userData)
//         .then(response => {
//             const { auth_token } = response.data;
//             setAxiosAuthToken(auth_token);
//             dispatch(setToken(auth_token));
//             dispatch(getCurrentUser(redirectTo, history));
//         })
//         .catch(error => {
//             dispatch(unsetCurrentUser());
//             toastOnError(error);
//         });
// };
//
// export const getCurrentUser = (redirectTo, history) => dispatch => {
//     axios
//         .get("/api/v1/auth/users/me/")
//         .then(response => {
//             const user = {
//                 username: response.data.username,
//                 email: response.data.email
//             };
//             dispatch(setCurrentUser(user, redirectTo, history));
//         })
//         .catch(error => {
//             dispatch(unsetCurrentUser());
//             toastOnError(error);
//         });
// };
//
// export const setCurrentUser = (user, redirectTo) => dispatch => {
//     localStorage.setItem("user", JSON.stringify(user));
//     dispatch({
//         type: SET_CURRENT_USER,
//         payload: user
//     });
//
//     if (redirectTo !== "") {
//         dispatch(push(redirectTo));
//     }
// };
//
// export const setToken = token => dispatch => {
//     setAxiosAuthToken(token);
//     localStorage.setItem("token", token);
//     dispatch({
//         type: SET_TOKEN,
//         payload: token
//     });
// };
//
// export const unsetCurrentUser = () => dispatch => {
//     setAxiosAuthToken("");
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     dispatch({
//         type: UNSET_CURRENT_USER
//     });
// };
//
// export const logout = () => dispatch => {
//     axios
//         .post("/api/v1/auth/token/logout/")
//         .then(response => {
//             dispatch(unsetCurrentUser());
//             dispatch(push("/"));
//             toast.success("Logout successful.");
//         })
//         .catch(error => {
//             dispatch(unsetCurrentUser());
//             toastOnError(error);
//         });
// };





import axios from "axios";
import { toast } from "react-toastify";
import { SET_TOKEN, SET_CURRENT_USER, UNSET_CURRENT_USER } from "./LoginTypes";
import { setAxiosAuthToken, toastOnError } from "../../utils/Utils";
import {push} from "react-router-redux/lib/actions";

// export const login = (userData, redirectTo) => dispatch => {
//     axios
//         .post("/api/v1/auth/token/login/", userData)
//         .then(response => {
//             const { auth_token } = response.data;
//             setAxiosAuthToken(auth_token);
//             dispatch(setToken(auth_token));
//             dispatch(getCurrentUser(redirectTo));
//         })
//         .catch(error => {
//             dispatch(unsetCurrentUser());
//             toastOnError(error);
//         });
// };

// export const login = (userData, redirectTo) => dispatch => {
//     console.log("Logging in with data:", userData); // Добавленный вывод в консоль
//     axios
//         .post("/api/v1/auth/token/login/", userData)
//         .then(response => {
//             console.log("Login response:", response.data); // Выводим ответ на успешный запрос
//             const { auth_token } = response.data;
//             setAxiosAuthToken(auth_token);
//             dispatch(setToken(auth_token));
//             dispatch(getCurrentUser(redirectTo));
//         })
//         .catch(error => {
//             console.error("Login error:", error); // Выводим ошибку в случае неудачи
//             dispatch(unsetCurrentUser());
//             toastOnError(error);
//         });
// };

export const login = (userData, redirectTo) => dispatch => {
    return new Promise((resolve, reject) => {
        axios
            .post("/api/v1/auth/token/login/", userData)
            .then(response => {
                const { auth_token } = response.data;
                setAxiosAuthToken(auth_token);
                dispatch(setToken(auth_token));
                dispatch(getCurrentUser(redirectTo));
                resolve(); // Разрешить обещание после успешного выполнения запроса
            })
            .catch(error => {
                dispatch(unsetCurrentUser());
                toastOnError(error);
                reject(error); // Отклонить обещание в случае ошибки
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