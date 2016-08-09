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
import config from '../config'

class TopicItem extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }

    render() {
        var {topic} = this.props;
        var avatarUri = topic.profilepicture?topic.profilepicture:config.photoUrl+topic.avatar+'.png@50png';
        return (
            <TouchableOpacity activeOpacity={.5}>
                <View style={styles.container}>
                    <View>
                        <Image style={styles.avatar}
                               source={{uri: avatarUri}}/>
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