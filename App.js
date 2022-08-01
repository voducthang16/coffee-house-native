import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen } from './src/screen';

const Stack = createNativeStackNavigator();

export default function App() {
    let initRoute = 'Home';
    initRoute = 'Login';
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initRoute}>
                <Stack.Screen name="Home" component={HomeScreen} />
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
