import {
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

function HomeScreen() {
    return (
        <SafeAreaView style={styles().container}>
            <View style={styles().header}></View>
        </SafeAreaView>
    );
}

const styles = (props) =>
    StyleSheet.create({
        container: {
            paddingTop: 64,
            paddingRight: 16,
            paddingLeft: 16,
            backgroundColor: 'yellow',
        },
        header: {
            height: 60,
            width: '100%',
            backgroundColor: 'red',
        },
    });

export default HomeScreen;
