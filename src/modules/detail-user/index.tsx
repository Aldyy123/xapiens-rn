import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import axiosInstance from '../../libs/axiosConfig';
import DetailUserView from './view';
import { IUser } from '../../types/data';

const DetailUser: React.FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const route = useRoute();
    const { userId } = route.params as { userId: string };

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axiosInstance.get(`/users/${userId}`);
                setUser(response.data.data);
            } catch (error) {
                console.error('Error fetching user details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, [userId]);

    return <DetailUserView user={user} loading={loading} />;
};

export default DetailUser;
