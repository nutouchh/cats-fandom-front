import React, { useState } from 'react';
import { Button, Card, Form, Input, Row, Col } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useDispatch } from 'react-redux'; // Импортируем хук useDispatch
import { signupNewUser } from './SignupActions'; // Импортируем thunk-действие

const Signup = observer(() => {
    const dispatch = useDispatch(); // Получаем функцию dispatch из хука useDispatch
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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

    const onSignupClick = () => {
        const userData = {
            username,
            password,
        };
        dispatch(signupNewUser(userData)) // Вызываем thunk-действие signupNewUser с помощью dispatch
            .then(() => {
                navigate('/login');
            })
            .catch((error) => {
                console.error('Error signing up:', error);
                if (error.response && error.response.data) {
                    const { username, password } = error.response.data;
                    if (username) setUsernameError(username[0]);
                    if (password) setPasswordError(password[0]);
                }
            });
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Row justify="center">
                <Col span={8}>
                    <Card>
                        <h1>Sign up</h1>
                        <Form>
                            <Form.Item label="User name" validateStatus={usernameError ? 'error' : ''} help={usernameError}>
                                <Input
                                    type="text"
                                    placeholder="Enter user name"
                                    value={username}
                                    onChange={onChangeUsername}
                                />
                            </Form.Item>

                            <Form.Item label="Your password"  validateStatus={passwordError ? 'error' : ''} help={passwordError}>
                                <Input.Password
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={onChangePassword}
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" onClick={onSignupClick}>
                                    Sign up
                                </Button>
                            </Form.Item>
                        </Form>
                        <p>
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
});

export default Signup;

