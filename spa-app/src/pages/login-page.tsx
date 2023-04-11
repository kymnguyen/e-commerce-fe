import React, { useState } from 'react';
import { login, logout } from '../stores/actions/auth.action';
import LoginForm from '../components/auths/login-form';
import { useDispatch, useSelector } from 'react-redux';
import getAuthUser from '../stores/selectors/auth.selector';

const LoginPage: React.FC = () => {
    const user = useSelector(getAuthUser);
    const dispatch = useDispatch<any>();
    const handleLogin = (username: string, password: string) => {
        login(username, password)(dispatch);
        console.log(username);
    };

    return (
        <div>
            <h1>Login Page </h1>
            <LoginForm onLogin={handleLogin} />
            <h1>Token: {user.token}</h1>
            <h1> {user.error}</h1>
        </div>
    );
};

export default LoginPage;
