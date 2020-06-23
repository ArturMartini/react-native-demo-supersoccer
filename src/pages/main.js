import React, { Component } from 'react'
import { Text, AsyncStorage, TouchableOpacity, View, StyleSheet } from 'react-native'

export default class Main extends Component {
    componentDidMount() {
        this.checkLogin()
    }

    checkLogin = async () => {
        const userToken = await AsyncStorage.getItem('userToken')
        this.props.navigation.navigate(userToken ? 'Principal' : 'Main')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerOne}>
                    <View style={styles.containerTitle}>
                        <Text style={styles.textTitle}>SUPER SOCCER</Text>
                    </View>
                    <View style={styles.containerInner}>
                        <View>
                            <TouchableOpacity style={styles.buttonSignup}
                                onPress={() => this.props.navigation.navigate('Signup')}>
                                <Text style={styles.inputText}>SIGN UP</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.buttonLogin}
                                onPress={() => this.props.navigation.navigate('Login')}>
                                <Text style={styles.inputText}>LOGIN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3066BE',
    },

    containerTitle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    containerInner: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#3066BE',
        borderRadius: 10,
        padding: 5,
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

    textTitle: {
        fontSize: 25,
        color: '#FFF',
        fontWeight: 'bold',
        margin: 20,
    },

    inputText: {
        color: '#FFF',
        fontWeight: 'bold'
    },
})
