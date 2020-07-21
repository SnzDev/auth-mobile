import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppStack = createStackNavigator();

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


export default function Routes(){
    return(
        <NavigatorComponent>
            <AppStack.Navigator>
                <AppStack.Screen component={SignIn}/>
                <AppStack.Screen component={SignUp}/>
            </AppStack.Navigator>
        </NavigatorComponent>
    );
}