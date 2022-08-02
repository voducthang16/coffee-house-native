import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import images from '../../assets/images';
function Login({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <KeyboardAwareScrollView contentContainerStyle={styles.wrapper}>
                <ScrollView contentContainerStyle={styles.form} keyboardShouldPersistTaps="handled">
                    <Image style={styles.image} source={images.logo} />
                    <TextInput
                        selectionColor={'black'}
                        style={styles.input}
                        placeholder="Phone Number"
                        keyboardType="numeric"
                    />
                    <TextInput style={styles.input} placeholder="Password" selectionColor={'black'} />
                    <Text style={styles.fp}>Forgot Password ?</Text>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                    <Text style={styles.register}>
                        Don't have an account!{' '}
                        <Text style={styles.textColor} onPress={() => navigation.navigate('Home')}>
                            Register Here
                        </Text>
                    </Text>
                </ScrollView>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fafafa',
    },
    wrapper: {
        flex: 1,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    image: {
        width: 160,
        height: 160,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        height: 50,
        width: '100%',
        margin: 8,
        borderRadius: 8,
        backgroundColor: '#f1f1f1',
        padding: 16,
    },
    btn: {
        height: 50,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#ee0f37',
    },
    btnText: {
        fontSize: 16,
        color: '#fff',
    },
    fp: {
        margin: 8,
        textAlign: 'right',
        color: '#ee0f37',
    },
    register: {
        textAlign: 'center',
        marginTop: 36,
    },
    textColor: {
        color: '#ee0f37',
    },
});

export default Login;
