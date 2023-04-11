import React from 'react';
import { login } from '../stores/actions/auth.action';
import LoginForm from '../components/auths/login-form';
import getAuthUser from '../stores/selectors/auth.selector';
import { connect, useSelector } from 'react-redux';

interface LoginPageProps {
    handleLogin: (username: string, password: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = (props) => {
    const user = useSelector(getAuthUser);
    const { handleLogin } = props;
    const handleLoginFormSubmit = (email: string, password: string) => {
        handleLogin(email, password);
    };

    return (
        <div>
            <h1>Login Page </h1>
            <LoginForm onLogin={handleLoginFormSubmit} />
            <h1>Token: {user.token}</h1>
            <h1> {user.error}</h1>
        </div>
    );
};

const mapDispatchToProps = {
    handleLogin: login
};

export default connect(null, mapDispatchToProps)(LoginPage);
