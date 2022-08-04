import { SafeAreaView, View, Text, StyleSheet, ScrollView, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../../layouts/Header/Header';
import { AnimatedHeaderValue } from '../../layouts/Header/Header';
function TableScreen({ route, navigation }) {
    const { tableId } = route.params;
    return (
        <SafeAreaView style={styles().container}>
            <StatusBar style="dark" />
            <Header text={`Table ${tableId}`} />
            <ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: AnimatedHeaderValue } } }], {
                    useNativeDriver: false,
                })}
            >
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(tableId)}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = (props) =>
    StyleSheet.create({
        container: {
            paddingTop: 36,
            flex: 1,
            backgroundColor: '#fff',
        },
    });

export default TableScreen;
