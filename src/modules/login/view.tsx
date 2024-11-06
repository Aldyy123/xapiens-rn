import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import useStyles from './useStyles';

interface LoginViewProps {
    onLogin: (email: string, password: string) => void;
    isLoading: boolean;
}

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email tidak valid')
        .required('Email diperlukan'),
    password: Yup.string()
        .required('Password diperlukan'),
});

const LoginView: React.FC<LoginViewProps> = ({ onLogin, isLoading }) => {
    const styles = useStyles();
    return (
        <Formik
            initialValues={{ email: 'eve.holt@reqres.in', password: 'cityslicka' }}
            validationSchema={LoginSchema}
            onSubmit={(values) => onLogin(values.email, values.password)}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.container}>
                    <Text style={styles.title}>Login</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    {touched.email && errors.email && (
                        <Text style={styles.error}>{errors.email}</Text>
                    )}

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry
                    />
                    {touched.password && errors.password && (
                        <Text style={styles.error}>{errors.password}</Text>
                    )}

                    <Button title="Login" disabled={isLoading} onPress={() => handleSubmit()} />
                </View>
            )}
        </Formik>
    );
};
export default LoginView;
