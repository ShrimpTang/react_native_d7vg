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
import config from '../config';
import moment from 'moment';
import  Icon from 'react-native-vector-icons/MaterialIcons';
import FabIcon  from './FabIcon';
class GaneItem extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }

    render() {
        var {gane} = this.props;
        var avatarUri = gane.profilepicture ? gane.profilepicture : config.photoUrl + gane.avatar + '.png@50png';
        var date = moment(gane.date * 1000).fromNow();
        return (
            <TouchableOpacity activeOpacity={.5}>
                <View style={styles.container}>
                    <View style={styles.head}>
                        <Image style={styles.avatar}
                               source={{uri: avatarUri}}/>
                        <Text style={styles.psn_id}>{gane.psnid}</Text>
                        <Text style={styles.date}>{date}</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.title}>
                            <Text>{gane.title}</Text>
                        </View>
                        <View style={styles.info}>
                            <View style={{flex:1}}>
                            </View>

                            <View style={styles.infoType}>
                                <FabIcon
                                    style={{  marginRight: 8, width: 24,height: 24}}
                                    icon={
                                        <Icon name="remove-red-eye" size={14}
                                        color="#6d6d6d"/>
                                    }
                                />
                                <Text style={{fontSize:12,color:'#7b7b7b',marginRight:6}}>{gane.views}</Text>
                            </View>
                            <View style={styles.infoType}>
                                <FabIcon
                                    style={{ marginRight: 8,width: 24, height: 24}}
                                    icon={
                                        <Icon name="insert-comment" size={14}
                                        color="#6d6d6d"/>
                                    }
                                />
                                <Text style={styles.infoText}>{gane.rep}</Text>
                            </View>
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
        padding:10,
        backgroundColor:"#ffffff"
    },
    head: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        //   backgroundColor:"#4FC3F7"
    },
    psn_id: {
        overflow: 'hidden',
        fontSize: 14,
        //marginLeft:5,
        flex: 1
    },
    date: {
        fontSize: 12,
        color: '#9e9e9e'
        // marginRight:10
    },
    avatar: {
        width: 40,
        height: 40,
        margin: 5,
        borderRadius: 50
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
        alignItems: 'center',
        paddingTop:5
    },
    infoText: {
        fontSize: 12,
        color: '#7b7b7b',
        marginRight: 6
    },
    infoType: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoIcon: {}
})

export default GaneItem;