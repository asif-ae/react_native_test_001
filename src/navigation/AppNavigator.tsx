import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import GamePage from '../screens/GamePage';
import ChatPage from '../screens/ChatPage';
import NewsPage from '../screens/NewsPage';

export type RootStackParamList = {
  Game: undefined;
  Chat: undefined;
  News: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = '';
            if (route.name === 'Game') iconName = focused ? 'game-controller' : 'game-controller-outline';
            if (route.name === 'Chat') iconName = focused ? 'chatbox' : 'chatbox-outline';
            if (route.name === 'News') iconName = focused ? 'newspaper' : 'newspaper-outline';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Game" component={GamePage} />
        <Tab.Screen name="Chat" component={ChatPage} />
        <Tab.Screen name="News" component={NewsPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
