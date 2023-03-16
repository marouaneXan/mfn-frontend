import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Register from '../screens/Register';
import Map from '../screens/Map';
import Companies from '../screens/Companies';
const Stack = createNativeStackNavigator();
const RootStack=()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Register' component={Register} options={{ headerShown: false }}  />
                <Stack.Screen name='Companies' component={Companies}  />
                <Stack.Screen name='Map' component={Map} options={{ headerShown: false }}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootStack