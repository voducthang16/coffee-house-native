import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Header from '../../layouts/Header/Header';
import { AnimatedHeaderValue } from '../../layouts/Header/Header';
import TablePopup from '../../layouts/TablePopup/TablePopup';
function HomeScreen({ navigation, selectedList, setSelectedList }) {
    const [list, setList] = useState('All');
    const [show, setShow] = useState(false);
    const [tableId, setTableId] = useState();
    selectedList = list;
    setSelectedList = setList;
    const listTable = ['All', 'Active', 'Inactive'];
    const dummyData = [
        { id: 1, name: 'Table 1', status: true },
        { id: 2, name: 'Table 2', status: false },
        { id: 3, name: 'Table 3', status: true },
        { id: 4, name: 'Table 4', status: false },
        { id: 5, name: 'Table 5', status: true },
        { id: 6, name: 'Table 6', status: false },
        { id: 7, name: 'Table 7', status: true },
        { id: 8, name: 'Table 8', status: false },
        { id: 9, name: 'Table 9', status: false },
        { id: 10, name: 'Table 10', status: true },
        { id: 11, name: 'Table 11', status: false },
        { id: 12, name: 'Table 12', status: false },
        { id: 13, name: 'Table 13', status: true },
        { id: 14, name: 'Table 14', status: true },
        { id: 15, name: 'Table 15', status: false },
        { id: 16, name: 'Table 16', status: false },
        { id: 17, name: 'Table 17', status: true },
    ];
    return (
        <SafeAreaView style={styles().container}>
            <StatusBar style="dark" />
            <Header />

            <TablePopup show={show} onDismiss={() => setShow(false)} enableBackdropDismiss id={tableId}></TablePopup>

            <ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: AnimatedHeaderValue } } }], {
                    useNativeDriver: false,
                })}
            >
                <View style={styles().body}>
                    <Text style={{ fontSize: 28, fontWeight: '600', marginHorizontal: 6 }}>Table List</Text>
                    <View style={styles().list}>
                        {listTable.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => setSelectedList(item)}
                                style={[styles().listItem, selectedList === item && styles().selected]}
                            >
                                <Text style={[styles().listText, selectedList === item && styles().selectedText]}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles().table}>
                        {dummyData.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles().tableItem,
                                    item.status === true
                                        ? { backgroundColor: '#36cd78', borderColor: '#36cd78' }
                                        : null,
                                ]}
                                onPress={() => {
                                    setShow(true);
                                    setTableId(item.id);
                                }}
                            >
                                <Text
                                    style={[
                                        { fontSize: 18 },
                                        item.status === true ? { color: '#fff' } : { color: '#000' },
                                    ]}
                                >
                                    {item.name}
                                </Text>
                                <Text style={item.status === true ? { color: '#fff' } : { color: '#000' }}>
                                    {item.status ? 'Active' : 'Inactive'}
                                </Text>
                            </TouchableOpacity>
                        ))}
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
            backgroundColor: '#fff',
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
            marginHorizontal: 6,
            marginVertical: 8,
        },
        listItem: {
            flex: 1,
            fontSize: 16,
            paddingVertical: 8,
            marginHorizontal: 4,
            marginBottom: 4,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: 'transparent',
            borderStyle: 'solid',
            backgroundColor: '#fef5e6',
        },
        listText: {
            textAlign: 'center',
            color: 'coral',
            fontSize: 16,
            fontWeight: '400',
        },
        selected: {
            backgroundColor: 'coral',
        },
        selectedText: {
            color: '#fff',
        },
        table: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
        tableItem: {
            margin: 4,
            width: '30%',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            height: 108,
            backgroundColor: '#ddd',
            borderRadius: 16,
            borderWidth: 1,
            borderColor: '#c7c7c7',
            borderStyle: 'solid',
        },
    });

export default HomeScreen;
