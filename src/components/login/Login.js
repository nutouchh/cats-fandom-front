import React, { useState} from "react";
import {Button, Card, Col, Form, Input, Row} from "antd";
import {Link, useHistory, useNavigate} from "react-router-dom";
import {login} from "./LoginActions";
import {useDispatch} from "react-redux";
import {observer} from "mobx-react-lite";

const Login = observer(() => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
        setUsernameError('');
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
        setPasswordError('');
    };

    const onLoginClick = () => {
        console.log("Login button clicked"); // Добавленный вывод в консоль
        const userData = {
            // username: username,
            // password: password
            username,
            password

        };
        dispatch(login(userData, "/"))
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.error('Error login:', error);
                if (error.response && error.response.data) {
                    const { username, password } = error.response.data;
                    if (username) setUsernameError(username[0]);
                    if (password) setPasswordError(password[0]);
                }
            });
    };

    return (
        <div>
            <Row justify="center">
                <Col span={8}>
                    <Card>
                    <h1>Login</h1>
                    <Form>
                        <Form.Item label="User name" validateStatus={usernameError ? 'error' : ''} help={usernameError}>
                            <Input
                                type="text"
                                name="username"
                                placeholder="Enter user name"
                                value={username}
                                onChange={onChangeUsername}
                            />
                        </Form.Item>

                        <Form.Item label="Your password" validateStatus={passwordError ? 'error' : ''} help={passwordError}>
                            <Input.Password
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={onChangePassword}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={onLoginClick}>
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                    <p className="mt-2">
                        Don't have an account? <Link to="/signup">Signup</Link>
                    </p>
                </Card>
                </Col>
            </Row>
        </div>
    );
});

export default Login;