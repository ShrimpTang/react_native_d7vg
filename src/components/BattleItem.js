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
} from 'react-native'
import config from '../config';
import moment from 'moment';
import  Icon from 'react-native-vector-icons/MaterialIcons';
import FabIcon  from './FabIcon';
import PlatformTip from './PlatformTip';
class BattleItem extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }

    onItemPress() {
        var {item,navigator} = this.props;
        if (item  && navigator) {
            var uri = config.baseUrl + 'battle/' + item.id;
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
        var {item} = this.props;
        var avatarUri = item.profilepicture ? item.profilepicture : config.photoUrl + item.avatar + '.png@55png';
        // var date = moment(item.date * 1000).fromNow();
        return (
            <TouchableOpacity activeOpacity={.5} onPress={this.onItemPress.bind(this)}>
                <View style={styles.container}>
                    <Image
                        resizeMode={Image.resizeMode.cover}
                        source={{uri:config.psnGameCoverUrl+item.gid+'.png@100w.png'}}
                        style={{height:55,width:100}}
                    />
                    <TouchableOpacity onPress={this.avatarOnPress.bind(this)}>
                        <Image style={styles.avatar}
                               source={{uri: avatarUri}}
                        />
                    </TouchableOpacity>
                    <View style={styles.content}>
                        <Text style={styles.cnname}>{item.cnname}</Text>
                        <View style={styles.platform}>
                            {
                                item.platform.split(',').map(pl=> {
                                    return <PlatformTip style={{marginRight:5}} key={pl} platform={pl}/>
                                })
                            }
                        </View>
                        <Text style={styles.time}>
                            {moment(parseInt(item.startdate)*1000).format('HH:mm')}/{item.howlong}小时
                        </Text>
                    </View>
                    <View style={styles.type}>
                        <Text style={styles.typeText}>互刷</Text>
                        <Text style={styles.typeText}>招募{item.num}人</Text>
                    </View>

                </View>

            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "#ffffff",
        height: 70,
        alignItems: 'center',
        marginLeft:6,
        marginRight:6
    },
    avatar: {
        width: 55,
        height: 55,
        marginLeft:12
    },
    content:{
        flexDirection:'column',
        marginLeft:7,
        flex:1
    },
    cnname:{
        fontSize:12,
        marginBottom:4

    },
    platform:{
        flexDirection:'row',
        marginBottom:4
    },
    time:{
        fontSize:12
    },
    type:{
        flexDirection:'column'
    },
    typeText:{
        color:'#B8C4CE',
        fontSize:12,
        textAlign:'right'
    }
})

export default BattleItem;