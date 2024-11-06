import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/AuthContext';
import Login from '../modules/login';
import UserList from '../modules/home';
import DetailUser from '../modules/detail-user';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Home" component={UserList} options={{ headerShown: false }} />
          <Stack.Screen initialParams={{ userId: 0 }} name="Detail" component={DetailUser} />
        </>
      ) : (
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
