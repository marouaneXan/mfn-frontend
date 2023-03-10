import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Register from '../screens/Register';
import Login from '../screens/Login';
import Map from '../screens/Map';
const Stack = createNativeStackNavigator();
const RootStack=()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Register' component={Register} options={{ headerShown: false }}  />
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}  />
                <Stack.Screen name='Map' component={Map} options={{ headerShown: false }}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootStack