/**
 * Created by Shrimp on 16/7/31.
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Image
} from 'react-native'



class TopicItem extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            topic: {
                "id": "27855",
                "psnid": "azarias_wei",
                "node": "help",
                "title": "合金装备3 Dremuchij North 这图 说有g",
                "thumb": "",
                "views": "4",
                "count": "0",
                "date": "1469954325",
                "avatar": "UP4312/CUSA02383_00-AV00000000000001_D41438EB86C307FB58AB_l",
                "profilepicture": ""
            }
        };
    }

    render() {
        var {topic} = this.props;
        return (
            <TouchableOpacity activeOpacity={.5}>
                <View style={styles.container}>
                    <View>
                        <Image style={styles.avatar}
                               source={{uri: 'http://photo.d7vg.com/avatar/UP4312/CUSA02383_00-AV00000000000001_D41438EB86C307FB58AB_l.png@50png'}}/>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.title}>
                            <Text>{topic.title}</Text>
                        </View>
                        <View style={styles.info}>
                            <View style={{flex:1}}>
                                <Text style={styles.psn_id}>{topic.psnid}</Text>
                            </View>
                            <Text style={styles.views}>浏览{topic.views}</Text>
                            <Text style={styles.count}>阅读{topic.count}</Text>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#0011FF",
        flexDirection: 'row'
    },
    avatar: {
        width: 60,
        height: 60,
        margin: 5,
        //backgroundColor: '#ff00aa',
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        //  backgroundColor: '#ff7755',
        margin: 5
    },
    title: {
        //backgroundColor: '#00cc33',
        flexWrap: 'wrap',
        flex: 1,

    },
    info: {
        flexDirection: 'row',
    },
    psn_id: {
        borderWidth: 1,
        borderColor: 'yellow',
        backgroundColor: 'yellow',
        alignSelf: 'flex-start',
        borderRadius: 1,
        overflow: 'hidden',
        flex: 1
    },
    views: {
        justifyContent: 'flex-end',
        marginRight: 10
    },
    count: {
        justifyContent: 'flex-end',
        marginRight: 19
    }
})

export default TopicItem;