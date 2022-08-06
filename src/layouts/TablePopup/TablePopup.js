import { useState, useEffect, useRef } from 'react';
import { Dimensions, Animated, StyleSheet, View, Text, Pressable } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { IconButton, Portal } from 'react-native-paper';
function TablePopup({ show, onDismiss, enableBackdropDismiss, children, id }) {
    const tablePopupHeight = Dimensions.get('window').height * 0.8;
    const deviceWidth = Dimensions.get('window').width;
    const [open, setOpen] = useState(show);
    const table = useRef(new Animated.Value(-tablePopupHeight)).current;

    const onGesture = (event) => {
        if (event.nativeEvent.translationY > 0) {
            table.setValue(-event.nativeEvent.translationY);
        }
    };

    const onGestureEnd = (event) => {
        if (event.nativeEvent.translationY > tablePopupHeight / 8) {
            onDismiss();
        } else {
            table.setValue(0);
        }
    };

    useEffect(() => {
        if (show) {
            setOpen(show);
            Animated.timing(table, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(table, {
                toValue: -tablePopupHeight,
                duration: 200,
                useNativeDriver: false,
            }).start(() => {
                setOpen(false);
            });
        }
    }, [show]);

    if (!open) {
        return null;
    }
    return (
        <Portal>
            <Pressable onPress={enableBackdropDismiss ? onDismiss : undefined} style={styles.backDrop} />
            <Animated.View
                style={[
                    styles.container,
                    {
                        height: tablePopupHeight,
                        bottom: table,
                        shadowOffset: {
                            height: -3,
                        },
                    },
                    styles.common,
                ]}
            >
                <PanGestureHandler onGestureEvent={onGesture} onEnded={onGestureEnd}>
                    <View
                        style={[
                            styles.header,
                            styles.common,
                            {
                                position: 'relative',
                                shadowOffset: {
                                    height: 3,
                                },
                                justifyContent: 'center',
                                alignItems: 'center',
                            },
                        ]}
                    >
                        <View
                            style={{
                                position: 'absolute',
                                width: 60,
                                height: 3,
                                borderRadius: 1.5,
                                zIndex: 10,
                                top: 6,
                                left: (deviceWidth - 60) / 2,
                                backgroundColor: '#ccc',
                            }}
                        />
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 18,
                                fontWeight: '500',
                            }}
                        >
                            {`Table ${id}`}
                        </Text>
                        <IconButton color="#000" icon="close" style={styles.closeIcon} onPress={onDismiss} />
                    </View>
                </PanGestureHandler>
                {children}
            </Animated.View>
        </Portal>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: '#fff',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        overflow: 'hidden',
    },
    header: {
        height: 44,
        backgroundColor: '#fff',
    },
    common: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
        },
        shadowOpacity: 0.24,
        shadowRadius: 4,
        elevation: 3,
    },
    closeIcon: {
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 10,
    },
    backDrop: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 80,
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
    },
});

export default TablePopup;
