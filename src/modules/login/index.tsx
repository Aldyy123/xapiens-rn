import React, { useState } from 'react';
import LoginView from './view';
import axiosInstance from '../../libs/axiosConfig';
import { useAuth } from '../../context/AuthContext';
import { Alert } from 'react-native';

const Login: React.FC = () => {
    const { login } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (username: string, password: string) => {
        try {
            setIsLoading(true);
            const response = await axiosInstance.post('/login', {
                username,
                password,
            });

            if (response.status === 200 && response.data.token) {
                const token = response.data.token;
                await login(token);
            } else {
                Alert.alert('Login failed', 'Invalid username or password');
            }
        } catch (error) {
            console.error('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return <LoginView isLoading={isLoading} onLogin={handleLogin} />;
};

export default Login;
