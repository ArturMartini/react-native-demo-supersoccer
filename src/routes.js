import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main'
import Login from './pages/login'
import Initial from './pages/initial';


export default createAppContainer(
    createStackNavigator(
    {
        Main:Main,
        Login:Login,
        Initial:Initial,
    },
    {
        initialRouteName: 'Main',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#3066BE"
            },
            headerTitleStyle: {
                textAlign: 'center'
            },
            headerTintColor: "#FFF"
        },
    })
);