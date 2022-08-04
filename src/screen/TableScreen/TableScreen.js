import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
function TableScreen({ route, navigation }) {
    const { tableId } = route.params;
    return (
        <SafeAreaView style={styles().container}>
            <StatusBar style="dark" />
            <View>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(tableId)}</Text>
            </View>
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
