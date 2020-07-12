import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { WebView } from 'react-native-webview'
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ListPosts extends Component {
    constructor() {
        super();
        this.state = {
            posts: posts,
            data: {},
        };
    }

    confirmRating = id => {
        const filteredData = this.state.posts.filter(item => item.id !== id);
        this.setState({ posts: filteredData });
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
                        <Text style={{ color: "#eebc27", fontWeight: "bold" }}>{item.rating}</Text>
                    </View>
                </View>
                <View style={styles.summaryRight}>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ flex: 1 }}>Shooting</Text>
                        <Rating
                            type='custom'
                            ratingBackgroundColor='#c8c7c8'
                            ratingCount={5}
                            imageSize={20}
                            onFinishRating={this.ratingCompleted}
                            style={{ paddingLeft: 5 }}
                        />
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <Text style={{ flex: 1 }}>Passing</Text>
                        <Rating
                            type='custom'
                            ratingBackgroundColor='#c8c7c8'
                            ratingCount={5}
                            imageSize={20}
                            onFinishRating={this.ratingCompleted}
                            style={{ paddingLeft: 5 }}
                        />
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <Text style={{ flex: 1 }}>Dribbling</Text>
                        <Rating
                            type='custom'
                            ratingBackgroundColor='#c8c7c8'
                            ratingCount={5}
                            imageSize={20}
                            onFinishRating={this.ratingCompleted}
                            style={{ paddingLeft: 5 }}
                        />
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <Text style={{ flex: 1 }}>Defending</Text>
                        <Rating
                            type='custom'
                            ratingBackgroundColor='#c8c7c8'
                            ratingCount={5}
                            imageSize={20}
                            onFinishRating={this.ratingCompleted}
                            style={{ paddingLeft: 5 }}
                        />
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <Text style={{ flex: 1 }}>Physical</Text>
                        <Rating
                            type='custom'
                            ratingBackgroundColor='#c8c7c8'
                            ratingCount={5}
                            imageSize={20}
                            onFinishRating={this.ratingCompleted}
                            style={{ paddingLeft: 5 }}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <WebView source={{ uri: item.url }} />
            </View>
            <View style={styles.divConfirm}>
                <TouchableOpacity onPress={() => this.confirmRating(item.id)}>
                    <Icon name="check" size={30} />
                </TouchableOpacity>

            </View>
        </View>
    )

    render() {
        if (this.state.posts.length > 0) {
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
        } else {
            return (
                <View style={styles.noData}>
                    <Text>No more data.</Text>
                </View>
            )
        }
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
        flex: 0.4,
    },

    summaryRight: {
        flex: 0.6,
        paddingTop: 60,
        paddingLeft: 10,
        alignItems: "center",
        justifyContent: "center",
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
        padding: 5,
        alignContent: "center",
        justifyContent: "center",
        borderBottomWidth: 0.5,
    },

    divConfirm: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        margin: 10,
        borderBottomWidth: 0.5
    },

    button: {
        margin: 4,
    },

    list: {
        margin: 2,
    },

    noData: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }

})

const posts = [
    {
        id: "1",
        name: "Cristiano Rolnado",
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

const fill = 'rgb(134, 65, 244)'
const dataBar = [50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80]