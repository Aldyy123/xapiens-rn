import React from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import useStyles from './useStyles';
import { IUser } from '../../types/data';
import { useAuth } from '../../context/AuthContext';

interface UserListViewProps {
    users: IUser[];
    loading: boolean;
    handlePress: (id: number) => void;
}

const UserListView: React.FC<UserListViewProps> = ({ users, loading, handlePress }) => {
    const { logout } = useAuth();
    const styles = useStyles();

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text style={styles.loadingText}>Loading Users...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User List</Text>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.userContainer}>
                        <TouchableOpacity onPress={() => handlePress(item.id)}>
                            <Text style={styles.userName}>
                                {item.first_name} {item.last_name}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default UserListView;
