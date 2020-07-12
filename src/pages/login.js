import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationActions, StackActions } from 'react-navigation'
import api from '../services/api';

export default class Login extends Component {

    state = {
        email: "",
        password: "",
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>SUPER SOCCER</Text>
                <View style={styles.containerLogin}>
                    <Text style={styles.text}>email</Text>
                    <TextInput
                        ref={(email) => { email = email }}
                        onChangeText={(email) => this.setState({ email })}
                        autoCompleteType='email'
                        style={styles.input} />
                    <Text style={styles.text}>password</Text>
                    <TextInput
                        ref={(password) => { password = password }}
                        onChangeText={(password) => this.setState({ password })}
                        secureTextEntry={true}
                        style={styles.input}></TextInput>
                    <View style={styles.containerInner}>
                        <View>
                            <TouchableOpacity style={styles.buttonSignup}
                                onPress={() => this.props.navigation.navigate('Signup')}>
                                <Text style={styles.inputText}>SIGN UP</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.buttonLogin}
                                onPress={() => this.onLogin()}>
                                <Text style={styles.inputText}>LOGIN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    onLogin = async () => {
        var login = {
            email: this.state.email,
            password: this.state.password,
        }

        // const response = await api.post('/v1/login', login)
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Main', user: {} })],
            key: null,
        }));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3066BE',
    },

    containerLogin: {
        width: 300,
        margin: 20,
    },

    textTitle: {
        fontSize: 25,
        color: '#FFF',
        fontWeight: 'bold',
        margin: 20,
    },

    text: {
        margin: 0,
        padding: 0,
        color: '#FFF',
    },

    input: {
        padding: 0,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderColor: '#FFF',
        color: "#FFF"
    },

    inputText: {
        color: '#FFF',
        fontWeight: 'bold'
    },

    containerInner: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3066BE',
        borderRadius: 10,
        padding: 5,
        margin: 15,
    },

    buttonSignup: {
        height: 42,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        borderRadius: 5,
        backgroundColor: '#963484',
    },

    buttonLogin: {
        height: 42,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        borderRadius: 5,
        backgroundColor: '#28C2FF',
    },

})