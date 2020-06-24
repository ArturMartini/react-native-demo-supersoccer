import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/login'
import Main from './pages/main';


export default createAppContainer(
    createStackNavigator(
    {
        Login:Login,
        Main:Main,
    },
    {
        initialRouteName: 'Login',
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