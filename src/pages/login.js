import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
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
                        ref={(email) => {email = email}}
                        onChangeText={(email) => this.setState({email})}
                        autoCompleteType='email' 
                        style={styles.input} />
                    <Text style={styles.text}>password</Text>
                    <TextInput
                        ref={(password) => {password = password}}
                        onChangeText={(password) => this.setState({password})}
                        secureTextEntry={true} 
                        style={styles.input}></TextInput>
                </View>
                <TouchableOpacity style={styles.button} 
                    onPress={() => this.onLogin()}>
                    <Text style={styles.inputText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }

    onLogin = async () => {
        var login = {
            email: this.state.email,
            password: this.state.password,
        }
    
        const response = await api.post('/v1/login', login)
        console.log(response.data)
        this.props.navigation.navigate("Initial", {user: response.data})
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

    button: {
        height: 42,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: '#28C2FF',
    },

})