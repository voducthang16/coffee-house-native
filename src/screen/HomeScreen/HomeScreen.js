import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Header from '../../layouts/Header/Header';
import { AnimatedHeaderValue } from '../../layouts/Header/Header';
function HomeScreen({ navigation, selectedList, setSelectedList }) {
    const [list, setList] = useState('All');
    selectedList = list;
    setSelectedList = setList;
    const listTable = ['All', 'Active', 'Inactive'];

    return (
        <SafeAreaView style={styles().container}>
            <StatusBar style="dark" />
            <Header />
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
                        <TouchableOpacity
                            style={[styles().tableItem, { backgroundColor: '#36cd78', borderColor: '#36cd78' }]}
                            onPress={() => {
                                navigation.navigate('TableScreen', {
                                    tableId: 1,
                                });
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>Table 1</Text>
                            <Text style={{ color: '#fff' }}>Active</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles().tableItem]}
                            onPress={() => {
                                navigation.navigate('TableScreen', {
                                    tableId: 2,
                                });
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#000' }}>Table 2</Text>
                            <Text style={{ color: '#000' }}>Inactive</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles().tableItem]}
                            onPress={() => {
                                navigation.navigate('TableScreen', {
                                    tableId: 3,
                                });
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#000' }}>Table 3</Text>
                            <Text style={{ color: '#000' }}>Inactive</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles().tableItem, { backgroundColor: '#36cd78', borderColor: '#36cd78' }]}
                            onPress={() => {
                                navigation.navigate('TableScreen', {
                                    tableId: 4,
                                });
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>Table 4</Text>
                            <Text style={{ color: '#fff' }}>Active</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles().tableItem, { backgroundColor: '#36cd78', borderColor: '#36cd78' }]}
                            onPress={() => {
                                navigation.navigate('TableScreen', {
                                    tableId: 5,
                                });
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>Table 5</Text>
                            <Text style={{ color: '#fff' }}>Active</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles().tableItem]}
                            onPress={() => {
                                navigation.navigate('TableScreen', {
                                    tableId: 6,
                                });
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#000' }}>Table 6</Text>
                            <Text style={{ color: '#000' }}>Inactive</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles().tableItem]}
                            onPress={() => {
                                navigation.navigate('TableScreen', {
                                    tableId: 7,
                                });
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#000' }}>Table 7</Text>
                            <Text style={{ color: '#000' }}>Inactive</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles().tableItem, { backgroundColor: '#36cd78', borderColor: '#36cd78' }]}
                            onPress={() => {
                                navigation.navigate('TableScreen', {
                                    tableId: 8,
                                });
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>Table 8</Text>
                            <Text style={{ color: '#fff' }}>Active</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles().tableItem, { backgroundColor: '#36cd78', borderColor: '#36cd78' }]}
                            onPress={() => {
                                navigation.navigate('TableScreen', {
                                    tableId: 9,
                                });
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>Table 9</Text>
                            <Text style={{ color: '#fff' }}>Active</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles().tableItem]}
                            onPress={() => {
                                navigation.navigate('TableScreen', {
                                    tableId: 10,
                                });
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#000' }}>Table 10</Text>
                            <Text style={{ color: '#000' }}>Inactive</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles().tableItem]}
                            onPress={() => {
                                navigation.navigate('TableScreen', {
                                    tableId: 11,
                                });
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#000' }}>Table 11</Text>
                            <Text style={{ color: '#000' }}>Inactive</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles().tableItem, { backgroundColor: '#36cd78', borderColor: '#36cd78' }]}
                            onPress={() => {
                                navigation.navigate('TableScreen', {
                                    tableId: 12,
                                });
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>Table 12</Text>
                            <Text style={{ color: '#fff' }}>Active</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles().tableItem, { backgroundColor: '#36cd78', borderColor: '#36cd78' }]}
                            onPress={() => {
                                navigation.navigate('TableScreen', {
                                    tableId: 13,
                                });
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>Table 13</Text>
                            <Text style={{ color: '#fff' }}>Active</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles().tableItem]}
                            onPress={() => {
                                navigation.navigate('TableScreen', {
                                    tableId: 14,
                                });
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#000' }}>Table 14</Text>
                            <Text style={{ color: '#000' }}>Inactive</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles().tableItem]}
                            onPress={() => {
                                navigation.navigate('TableScreen', {
                                    tableId: 15,
                                });
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#000' }}>Table 15</Text>
                            <Text style={{ color: '#000' }}>Inactive</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles().tableItem,
                                { backgroundColor: '#36cd78', borderColor: '#36cd78', marginLeft: 10 },
                            ]}
                            onPress={() => {
                                navigation.navigate('TableScreen', {
                                    tableId: 16,
                                });
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>Table 16</Text>
                            <Text style={{ color: '#fff' }}>Active</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles().tableItem,
                                { backgroundColor: '#36cd78', borderColor: '#36cd78', marginRight: 'auto' },
                            ]}
                            onPress={() => {
                                navigation.navigate('TableScreen', {
                                    tableId: 17,
                                });
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>Table 17</Text>
                            <Text style={{ color: '#fff' }}>Active</Text>
                        </TouchableOpacity>
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
