import { StatusBar } from 'expo-status-bar';
import { Easing, StyleSheet, Text, View } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PagerProvider } from 'react-native-paper';
import store from './src/components/Store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LoginScreen } from './src/screen';
import BottomNavigation from './src/components/BottomNavigation/';

const Stack = createNativeStackNavigator();

export default function App() {
    let initRoute = 'BottomNavigation';
    // initRoute = 'Login';
    return (
        <StoreProvider store={store}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <PagerProvider>
                    <NavigationContainer>
                        <Stack.Navigator
                            screenOptions={{
                                gestureEnabled: true,
                                gestureDirection: 'horizontal',
                            }}
                            initialRouteName={initRoute}
                        >
                            <Stack.Screen
                                name="BottomNavigation"
                                component={BottomNavigation}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </PagerProvider>
            </GestureHandlerRootView>
        </StoreProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
