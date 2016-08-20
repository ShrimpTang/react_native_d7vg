/**
 * Created by Shrimp on 10/7/31.
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ScrollView,
    Dimensions
} from 'react-native'
import config from '../config';
import moment from 'moment';
import  Icon from 'react-native-vector-icons/MaterialIcons';
import FabIcon  from './FabIcon';
class BattleItem extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }

    onItemPress() {
        var {item,type,navigator} = this.props;
        if (item && type && navigator) {
            var uri = config.baseUrl + type + '/' + item.id;
            navigator.push({
                name: 'webView',
                uri
            })
        }
    }

    avatarOnPress() {
        var {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'userInfo',
            })
        }
    }

    render() {
        var {item,type} = this.props;
        var avatarUri = item.profilepicture ? item.profilepicture : config.photoUrl + item.avatar + '.png@50png';
        var date = moment(item.date * 1000).fromNow();
        return (
            <TouchableOpacity activeOpacity={.5} onPress={this.onItemPress.bind(this)}>
                <View style={styles.container}>
                    <View style={styles.head}>
                        <TouchableOpacity onPress={this.avatarOnPress.bind(this)}
                                          style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                            <Image style={styles.avatar}
                                   source={{uri: avatarUri}}

                            />
                            <View style={{flex:1,flexDirection:'row'}}>
                                <Text style={styles.psn_id}>{item.psnid}</Text>
                            </View>
                        </TouchableOpacity>

                        <Text style={styles.date}>{date}</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.title}>
                            <Text>{item.cnname}</Text>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: "#ffffff"
    },
    head: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        margin: 10
        // backgroundColor:"#4FC3F7"
    },
    psn_id: {
        //overflow: 'hidden',
        fontSize: 14,
        marginLeft: 6
    },
    date: {
        fontSize: 12,
        color: '#9e9e9e'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50
        //backgroundColor: '#ff00aa',
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    title: {
        flexWrap: 'wrap',
        flex: 1,
    },
    photos: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10

    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 8,
        marginLeft: 8
    },
    infoText: {
        fontSize: 12,
        color: '#7b7b7b',
        marginRight: 6
    },
    infoType: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',

    },
    infoIcon: {},
    movieText: {
        color: '#969696',
        fontSize: 12,
        flex: 1
    }
})

export default BattleItem;