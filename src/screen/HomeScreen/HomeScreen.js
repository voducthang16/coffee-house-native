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
import images from '../../assets/images';
function HomeScreen() {
    return (
        <SafeAreaView style={styles().container}>
            <StatusBar style="dark" />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles().header}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#7e7e7e' }}>Good Morning,</Text>
                        <Text style={{ fontSize: 22, fontWeight: '600' }}>V</Text>
                    </View>
                    <Image style={{ width: 32, height: 32 }} source={images.notification} />
                </View>
                <View style={styles().body}>
                    <Text style={{ fontSize: 28, fontWeight: '600' }}>Table List</Text>
                    <View style={styles().list}>
                        <Text style={styles().listItem}>All</Text>
                        <Text style={[styles().listItem, { backgroundColor: '#36cd78', borderColor: '#36cd78' }]}>
                            Active
                        </Text>
                        <Text style={styles().listItem}>Inactive</Text>
                    </View>
                    <View style={styles().table}>
                        <View style={[styles().tableItem, { backgroundColor: '#36cd78', borderColor: '#36cd78' }]}>
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>Table 1</Text>
                            <Text style={{ color: '#fff' }}>Active</Text>
                        </View>
                        <View style={styles().tableItem}>
                            <Text>Table 2</Text>
                            <Text>Inactive</Text>
                        </View>
                        <View style={styles().tableItem}></View>
                    </View>
                    <View style={styles().table}>
                        <View style={styles().tableItem}></View>
                        <View style={styles().tableItem}></View>
                        <View style={styles().tableItem}></View>
                    </View>
                    <View style={styles().table}>
                        <View style={styles().tableItem}></View>
                        <View style={styles().tableItem}></View>
                        <View style={styles().tableItem}></View>
                    </View>
                    <View style={styles().table}>
                        <View style={styles().tableItem}></View>
                        <View style={styles().tableItem}></View>
                        <View style={styles().tableItem}></View>
                    </View>
                    <View style={styles().table}>
                        <View style={styles().tableItem}></View>
                        <View style={styles().tableItem}></View>
                        <View style={styles().tableItem}></View>
                    </View>
                    <View style={styles().table}>
                        <View style={styles().tableItem}></View>
                        <View style={styles().tableItem}></View>
                        <View style={styles().tableItem}></View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = (props) =>
    StyleSheet.create({
        container: {
            paddingTop: 36,
            flex: 1,
            // backgroundColor: 'yellow',
            backgroundColor: '#fff',
        },
        header: {
            padding: 16,
            height: 70,
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#feeee1',
        },
        body: {
            marginTop: 8,
            marginBottom: 8,
            paddingLeft: 16,
            paddingRight: 16,
        },
        list: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: 8,
            marginBottom: 16,
        },
        listItem: {
            fontSize: 16,
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 8,
            paddingBottom: 8,
            backgroundColor: 'rgb(238,174,202)',
            flex: 1,
            marginLeft: 4,
            marginRight: 4,
            marginBottom: 4,
            textAlign: 'center',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#ffa4dc',
            borderStyle: 'solid',
            color: '#fff',
            fontSize: 16,
            fontWeight: '500',
        },
        table: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        tableItem: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            margin: 4,
            height: 111,
            backgroundColor: '#ddd',
            borderRadius: 16,
            borderWidth: 1,
            borderColor: '#c7c7c7',
            borderStyle: 'solid',
        },
    });

export default HomeScreen;
