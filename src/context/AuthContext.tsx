import React, { createContext, useContext, FC, useState, useEffect, PropsWithChildren } from 'react';
import { getItem, setItem } from '../helpers/storage';

interface AuthContextProps {
    isAuthenticated: boolean;
    token: string | undefined;
    login: (token: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
    isAuthenticated: false,
    token: undefined,
    login: async () => {},
    logout: async () => {},
});

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState<string | undefined>(undefined);

    useEffect(() => {
        const initializeAuth = async () => {
            const savedToken = await getItem('token');
            if (savedToken) {
                setIsAuthenticated(true);
                setToken(savedToken);
            }
        };
        initializeAuth();
    }, []);

    const login = async (authToken: string) => {
        await setItem('token', authToken);
        setToken(authToken);
        setIsAuthenticated(true);
    };

    const logout = async () => {
        await setItem('token', '');
        setToken(undefined);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
