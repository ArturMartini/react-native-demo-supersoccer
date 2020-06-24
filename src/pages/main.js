import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ListPosts from './posts'

export default class Initial extends Component {

    user = {}

    state = {
        players: [],
    }

    render() {
        return (
            <View style={styles.container}>
                <ListPosts />
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFF",
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

