import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Image, processColor } from 'react-native'
import { WebView } from 'react-native-webview'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/AntDesign';

export default class ListPosts extends Component {
    constructor() {
        super();
        this.state = {
            posts: posts,
            data: {},
        };
    }

    componentDidMount() {
        this.loadPosts
    }

    loadPosts = () => {
        this.setState({
            posts: posts
        })
    }

    loadMore = () => {
    }

    renderItem = ({ item }) => (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.summaryLeft}>
                    <Image
                        style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                        source={{ uri: item.img }} />
                    <Text style={styles.textName}>{item.name}</Text>
                    <Text style={styles.text}>Age: {item.age}</Text>
                    <Text style={styles.text}>Position: {item.position}</Text>
                    <Text style={styles.text}>Foot: {item.foot}</Text>
                    <Text style={styles.text}>Genre: {item.genre}</Text>
                    <View style={{ flex: 1, flexDirection: "row", padding: 0, margin: 0 }}>
                        <Image style={{ width: 18, height: 18, marginRight: 5 }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1200px-Star_icon_stylized.svg.png' }} />
                        <Text style={styles.text}>{item.rating}</Text>
                    </View>
                </View>
                <View style={styles.summaryRight}>
                    <Image style={{ width: 170, height: 170 }} source={{ uri: 'https://miro.medium.com/max/2040/1*YFroPGj9dpPx7nqf045AUQ.png' }} />
                </View>
            </View>
            <View style={styles.body}>
                <WebView source={{ uri: item.url }} />
            </View>
            <View style={styles.divButton}>
                <TouchableOpacity 
                    on
                    >
                    <Icon.Button name="like1" backgroundColor={"#FFF"} color={"black"}>
                    </Icon.Button>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Icon.Button name="dislike1" backgroundColor={"#FFF"} color={"black"}>
                    </Icon.Button>
                </TouchableOpacity>
            </View>
        </View>
    )

    render() {
        return (
            <View>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.posts}
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
        borderRadius: 2,
        backgroundColor: "#FFF"
    },

    chart: {
        flex: 1
    },

    header: {
        flex: 0.1,
        flexDirection: "row",
        marginBottom: 10,
    },

    summaryLeft: {
        flex: 0.5,
    },

    summaryRight: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center"
    },

    textName: {
        margin: 0,
        fontSize: 14,
        fontWeight: "bold"
    },

    text: {
        margin: 0,
        fontSize: 14,
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
        borderBottomWidth: 0.5,
    },

    button: {
        margin: 4,
    },

    list: {
        margin: 2,
    }

})

const posts = [
    {
        id: "1",
        name: "Cristiano Ronaldo",
        age: 37,
        position: "st",
        foot: "right",
        genre: "male",
        rating: 4.7,
        likes: 99,
        unlikes: 22,
        url: "https://www.youtube.com/watch?v=u5LpWA_BDSE",
        img: "https://tmssl.akamaized.net/images/portrait/originals/8198-1568120625.jpg"
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
        url: "https://www.youtube.com/watch?v=_dBz4dTZocg",
        img: "https://www.ibahia.com/fileadmin/user_upload/ibahia/2020/marco/06/ronaldinho112.jpg"
    },
    {
        id: "3",
        name: "Neymar",
        age: 28,
        position: "st",
        foot: "right",
        genre: "male",
        rating: 4.5,
        likes: 199,
        unlikes: 22,
        url: "https://www.youtube.com/watch?v=6c4bzF1_-Ms",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/65/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg"
    }
]

const options = {
    width: 290,
    height: 290,
    margin: {
        top: 20,
        left: 20,
        right: 30,
        bottom: 20
    },
    r: 150,
    max: 100,
    fill: "#2980B9",
    stroke: "#2980B9",
    animate: {
        type: 'oneByOne',
        duration: 200
    },
    label: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: true,
        fill: '#34495E'
    }
}