import axios from "axios";
import { toast } from "react-toastify";
import { isEmpty } from "../../utils/Utils";
import {
    CREATE_USER_ERROR,
    CREATE_USER_SUBMITTED,
    CREATE_USER_SUCCESS
} from "./SignupTypes";

export const signupNewUser = userData => dispatch => {
    dispatch({ type: CREATE_USER_SUBMITTED }); // устанавливаем состояние "запрос отправлен"
    // возвращаем обещание, чтобы его можно было использовать в компоненте
    return axios
        .post("http://127.0.0.1:8000/api/v1/auth/users/", userData)
        .then(response => {
            // если запрос выполнен успешно, показываем сообщение об успешной регистрации
            toast.success(
                "Account for " +
                userData.username +
                " created successfully. Please login."
            );
            dispatch({ type: CREATE_USER_SUCCESS }); // устанавливаем состояние "регистрация успешна"
        })
        .catch(error => {
            // если произошла ошибка при выполнении запроса
            if (error.response) {
                // если есть ответ с сервера
                if (error.response.status === 400) {
                    // если ошибка связана с неправильными данными, отображаем сообщение для пользователя
                    
                    toast.error(JSON.stringify(error.response.data));
                } else {
                    // если есть другие ошибки, просто показываем их
                    toast.error(JSON.stringify(error.message));
                }
                dispatch({
                    type: CREATE_USER_ERROR,
                    errorData: error.response.data
                });
            } else {
                // если нет ответа с сервера, просто показываем сообщение об ошибке
                toast.error(JSON.stringify(error));
            }
            // обещание всегда должно быть возвращено, даже если произошла ошибка
            throw error;
        });
};