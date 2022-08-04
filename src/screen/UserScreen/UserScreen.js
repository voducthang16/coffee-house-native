import { SafeAreaView, Text, BackHandler, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
function UserScreen() {
    const navigation = useNavigation();
    const backAction = () => {
        navigation.goBack();
        return true;
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, []);
    return (
        <SafeAreaView>
            <Text>User Setting</Text>
        </SafeAreaView>
    );
}

export default UserScreen;
