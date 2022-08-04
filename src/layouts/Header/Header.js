import { View, Animated, StyleSheet, Text, Image } from 'react-native';
import images from '../../assets/images';

export let AnimatedHeaderValue = new Animated.Value(0);
const Header_Max_Height = 70;
const Header_Min_Height = 70;
const animateHeaderBackgroundColor = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: ['white', 'white'],
    extrapolate: 'clamp',
});

const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
});
function Header() {
    return (
        <Animated.View
            style={[styles().header, { height: animateHeaderHeight, backgroundColor: animateHeaderBackgroundColor }]}
        >
            <View>
                <Text style={{ fontSize: 16, color: '#7e7e7e' }}>Good Afternoon,</Text>
                <Text style={{ fontSize: 22, fontWeight: '600' }}>V</Text>
            </View>
            <Image style={{ width: 32, height: 32 }} source={images.notification} />
        </Animated.View>
    );
}

const styles = (props) =>
    StyleSheet.create({
        header: {
            paddingVertical: 16,
            paddingHorizontal: 22,
            left: 0,
            right: 0,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
        },
    });

export default Header;
