import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { WebView } from 'react-native-webview'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class ListPlayers extends Component {
    state = {
        players: [
            {
                id: "1",
                name: "Cristiano Ronaldo",
                age: 37,
                position: "st",
                foot: "right",
                genre: "male",
                rating: 4.9,
                likes: 99,
                unlikes: 22,
                url: "https://www.youtube.com/watch?v=u5LpWA_BDSE"
            },
            {
                id: "2",
                name: "Ronaldinho",
                age: 45,
                position: "st",
                foot: "right",
                genre: "male",
                rating: 4.9,
                likes: 199,
                unlikes: 22,
                url: "https://www.youtube.com/watch?v=_dBz4dTZocg"
            },
            {
                id: "3",
                name: "Neymar",
                age: 28,
                position: "st",
                foot: "right",
                genre: "male",
                rating: 4.9,
                likes: 199,
                unlikes: 22,
                url: "https://www.youtube.com/watch?v=6c4bzF1_-Ms"
            }
        ]
    }

    componentDidMount() {
        this.players = this.loadPlayers
    }

    loadPlayers = () => {
        this.setState({
            players: mockPlayers
        })
    }

    loadMore = () => {
    }

    renderItem = ({ item }) => (
        <View style={styles.container}>
            <View style={styles.summary}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.age}</Text>
                <Text style={styles.text}>{item.position}</Text>
                <Text style={styles.text}>{item.foot}</Text>
                <Text style={styles.text}>{item.genre}</Text>
                <Text style={styles.text}>{item.rating}</Text>
                <Text style={styles.text}>*</Text>
            </View>
            <View style={styles.body}>
                <WebView source={{
                    uri: item.url
                }} />
            </View>
            <View style={styles.divButton}>
                <TouchableOpacity style={styles.button}>
                    <Text>LIKE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>UNLIKE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    render() {
        return (
            <View>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.players}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        alignContent: "flex-start",
        justifyContent: "flex-start",
    },

    summary: {
        flex: 0.1,
        flexDirection: "row",
    },

    text: {
        margin: 5,
        color: "#FFF",
        fontSize: 15,
        fontWeight: "bold"
    },

    body: {
        width: 320,
        height: 220,
    },

    divButton: {
        flex: 1,
        flexDirection: "row",
        margin: 5,
        alignContent: "center",
        justifyContent: "center",
    },

    button: {
        margin: 4,
    },

    list: {
        margin:2,
    }

})