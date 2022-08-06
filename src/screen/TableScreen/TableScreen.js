import { SafeAreaView, View, Text, StyleSheet, ScrollView, Animated, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../../layouts/Header/Header';
import { AnimatedHeaderValue } from '../../layouts/Header/Header';
import SwitchToggle from 'react-native-switch-toggle';
import { useState, useEffect, useCallback } from 'react';
function TableScreen({ route, navigation }) {
    console.log('===== new render =====');
    let { tableId, status } = route.params;
    let onOff = status;
    console.log('onOff:', onOff);
    let [switchValue, setSwitchValue] = useState(onOff);
    console.log('switch value: ', switchValue);
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
                {/* <SwitchToggle switchOn={switchValue} onPress={() => setSwitchValue(!switchValue)} /> */}

                {/* <Switch style={{ width: 160, height: 160 }} onValueChange={toggleSwitch} value={switchValue} /> */}
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(tableId)}</Text>
                <Text>status: {JSON.stringify(switchValue)}</Text>
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
        switch: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        button: {
            marginHorizontal: 8,
            width: 120,
            height: 40,
            textAlign: 'center',
            lineHeight: 40,
            borderRadius: 8,
            backgroundColor: '#ddd',
            borderWidth: 1,
            borderColor: '#c7c7c7',
            borderStyle: 'solid',
        },
    });

export default TableScreen;
