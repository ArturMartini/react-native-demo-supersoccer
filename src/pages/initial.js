import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ListPlayers from './player'

export default class Initial extends Component {

    state = {
        players: []
    }

    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
        </View>
    )

    render() {
        const { navigation } = this.props
        const user = navigation.state.params.user
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.text}>User: {user.name}</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>Plan: Premium</Text>
                    </View>
                </View>
                <ListPlayers />
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#3066BE",
    },

    header: {
        flex: 0.2,
        flexDirection: "row",
        marginBottom: 20,

    },

    text: {
        color: "#FFF",
        fontSize: 16,
        margin: 5,
    },

    body: {
        flex: 1,
        alignContent: "flex-start",
        justifyContent: "flex-start",
    },
})

