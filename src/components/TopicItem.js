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
                    <View style={{flexDirection:'row',height:50,alignItems:'center',backgroundColor:"#4FC3F7"}}>
                        <Image style={styles.avatar}
                               source={{uri: avatarUri}}/>
                        <Text style={styles.psn_id}>{topic.psnid}</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.title}>
                            <Text>{topic.title}</Text>
                        </View>
                        <View style={styles.info}>
                            <View style={{flex:1}}>

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
         backgroundColor: "#039BE5",
        flexDirection: 'column',
        marginBottom:10
    },
    avatar: {
        width: 40,
        height: 40,
        margin: 5,
        borderRadius:50
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
        borderColor: '#B3E5FC',
        backgroundColor: '#B3E5FC',
        borderRadius: 1,
        overflow: 'hidden', //flex: 1
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