import React from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import useStyles from './useStyles';
import { IUser } from '../../types/data';

interface DetailUserViewProps {
    user: IUser | null;
    loading: boolean;
}

const DetailUserView: React.FC<DetailUserViewProps> = ({ user, loading }) => {
    const styles = useStyles();

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text style={styles.loadingText}>Loading User Details...</Text>
            </View>
        );
    }

    if (!user) {
        return <Text style={styles.errorText}>User not found</Text>;
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: user.avatar }} style={styles.imageStyle} />
            <Text style={styles.title}>{user.first_name} {user.last_name}</Text>
            <Text style={styles.detail}>Email: {user.email}</Text>
        </View>
    );
};

export default DetailUserView;
