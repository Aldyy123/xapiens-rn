import { StyleSheet } from 'react-native';

const useStyles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#f0f4f8',
            padding: 16,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#333',
            marginBottom: 16,
            textAlign: 'center',
        },
        userContainer: {
            backgroundColor: '#ffffff',
            padding: 16,
            marginVertical: 8,
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        },
        userName: {
            fontSize: 18,
            color: '#555',
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
        logoutButton: {
            backgroundColor: '#ff4d4d',
            paddingVertical: 12,
            borderRadius: 8,
            marginTop: 20,
            alignItems: 'center',
        },
        logoutText: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
        },
    });
};

export default useStyles;
