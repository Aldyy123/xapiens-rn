import { StyleSheet } from 'react-native';

const useStyles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            padding: 16,
        },
        title: {
            fontSize: 24,
            marginBottom: 20,
            textAlign: 'center',
        },
        input: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 12,
            paddingHorizontal: 10,
        },
        error: {
            fontSize: 12,
            color: 'red',
            marginBottom: 8,
        },
    });
};

export default useStyles;
