import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/screen';
import BottomNavigation from './src/components/BottomNavigation/';
const Stack = createNativeStackNavigator();

export default function App() {
    let initRoute = 'BottomNavigation';
    // initRoute = 'Login';
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initRoute}>
                <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
