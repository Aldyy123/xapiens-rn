import React, { useState, useEffect } from 'react';
import axiosInstance from '../../libs/axiosConfig';
import UserListView from './view';
import { IUser } from '../../types/data';


const UserList: React.FC<any> = ({navigation}) => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axiosInstance.get('/users');
                setUsers(response.data.data);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);


    const handlePress = (id: number) => {
        console.log('User ID:', id);
        navigation.navigate('Detail', { userId: id });
    };

    return <UserListView handlePress={handlePress} users={users} loading={loading} />;
};

export default UserList;
