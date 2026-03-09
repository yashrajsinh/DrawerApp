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

//Custom Icon
import Icon from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <Icon
              name="menu"
              size={28}
              style={{ marginLeft: 15 }}
              onPress={() => navigation.toggleDrawer()}
            />
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
