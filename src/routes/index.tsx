import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../pages/home/index'
import DetailScreen from '../pages/detail/index'
import ModalScreen from '../pages/fullScreen/index'
import ElseScreen from '../pages/fullScreen/else'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/AntDesign';
import My from '../'
import { HomeIconWithBadge } from './tabbarBadge'

 
const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Details: DetailScreen,
  My:HomeScreen
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent:any = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Details') {
          iconName = `android`;
        } else if (routeName === 'My') {
          iconName = `my`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#C62828',
      inactiveTintColor: 'gray',
    },
  }
);


const RootStack = createStackNavigator(
  {
    Main: {
      screen: TabNavigator,
    },
    MyModal: {
      screen: ModalScreen,
    }, 
    MyElse: {
      screen: ElseScreen,
    }, 
    
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);


const AppContainer = createAppContainer(RootStack);

export default AppContainer