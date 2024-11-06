import { StyleSheet } from 'react-native';

const useStyles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#f0f4f8',
            padding: 16,
        },
        title: {
            marginTop: 16,
            fontSize: 24,
            fontWeight: 'bold',
            color: '#333',
            marginBottom: 16,
        },
        detail: {
            fontSize: 18,
            color: '#555',
            marginBottom: 8,
        },
        loadingContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f0f4f8',
        },
        loadingText: {
            marginTop: 10,
            fontSize: 16,
            color: '#666',
        },
        errorText: {
            textAlign: 'center',
            color: 'red',
            fontSize: 16,
        },
        imageStyle: {
            width: 100,
            height: 100,
            resizeMode: 'contain',
        },
    });
};

export default useStyles;
