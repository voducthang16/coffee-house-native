import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, UserScreen } from '../../screen';
import { View, Image, Text, StyleSheet } from 'react-native';
import images from '../../assets/images';
const Tab = createBottomTabNavigator();

function BottomNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#e3e3e3',
                    height: 80,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles().wrapper}>
                            <Image source={images.home} style={styles(focused).icon} />
                            <Text style={styles(focused).text}>Home</Text>
                        </View>
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="User"
                component={UserScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles().wrapper}>
                            <Image source={images.user} style={styles(focused).icon} />
                            <Text style={styles(focused).text}>User</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = (props) =>
    StyleSheet.create({
        wrapper: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        icon: {
            width: 32,
            height: 32,
            marginBottom: 4,
            resizeMode: 'contain',
            tintColor: props ? '#000' : '#748c94',
        },
        text: {
            color: props ? '#000' : '#748c94',
            fontSize: 12,
            textAlign: 'center',
        },
    });

export default BottomNavigation;
