import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../pages/home/index'
import DetailScreen from '../pages/detail/index'
import ModalScreen from '../pages/fullScreen/index'
import MyScreen from '../pages/my/index'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SideBar from '../pages/slider/index';
import { HomeIconWithBadge } from './tabbarBadge'
import { createDrawerNavigator  } from 'react-navigation-drawer';
import Ionicons from 'react-native-vector-icons/AntDesign';
import AuthLoadingScreen from '../pages/authentication/index'
import Login from '../pages/login/index'

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Details: DetailScreen,
  My:MyScreen
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
          iconName = `user`;
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
const HomeScreenRouter = createDrawerNavigator(
  {
    Home:TabNavigator
  },
  {
    drawerLockMode:'unlocked',
    contentComponent: props => <SideBar {...props} />
  }
);


const RootStack = createStackNavigator(
  {
    Main: {
      screen: HomeScreenRouter,
    },
    Modal:{
      screen:ModalScreen
    }
    
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);


 const MainRouter = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: RootStack,
    Auth: Login,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)



const AppContainer = createAppContainer(MainRouter);

export default AppContainer