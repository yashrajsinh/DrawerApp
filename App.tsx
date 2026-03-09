import 'react-native-gesture-handler';
import React from 'react';
//Nav Container
import { NavigationContainer } from '@react-navigation/native';
//Drawer
import { createDrawerNavigator } from '@react-navigation/drawer';

//Screens
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SearchScreen from './src/screens/SearchScreen';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          drawerType: 'slide',
          headerLeft: () => (
            <Text
              style={{ fontSize: 24, marginLeft: 15 }}
              onPress={() => navigation.toggleDrawer()}
            >
              🟰
            </Text>
          ),
        })}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Search" component={SearchScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
