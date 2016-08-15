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
    Image,
    ScrollView
} from 'react-native'
import config from '../config';
import moment from 'moment';
import  Icon from 'react-native-vector-icons/MaterialIcons';
import FabIcon  from './FabIcon';
class GeneItem extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }

    render() {
        var {gene} = this.props;
        var avatarUri = gene.profilepicture ? gene.profilepicture : config.photoUrl + gene.avatar + '.png@50png';
        var date = moment(gene.date * 1000).fromNow();
        return (
            <View activeOpacity={.5}>
                <View style={styles.container}>
                    <View style={styles.head}>
                        <Image style={styles.avatar}
                               source={{uri: avatarUri}}/>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Text style={styles.psn_id}>{gene.psnid}</Text>
                            <View style={{marginTop:4,marginLeft:2}}>
                                <Icon name="play-arrow" size={12} color={"#0f9d58"}/>
                            </View>
                            <View style={{marginLeft:2}}>
                                <Text style={{fontSize:14,color:"#0f9d58"}}>{gene.title}</Text>
                            </View>
                        </View>
                        <Text style={styles.date}>{date}</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.title}>
                            <Text>{gene.content}</Text>
                        </View>
                    </View>
                    {this.renderPhotos.bind(this)()}
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
                            <Text style={{fontSize:12,color:'#7b7b7b',marginRight:6}}>{gene.views}</Text>
                        </View>
                        <View style={styles.infoType}>
                            <FabIcon
                                style={{ marginRight: 8,width: 24, height: 24}}
                                icon={
                                        <Icon name="insert-comment" size={14}
                                        color="#6d6d6d"/>
                                    }
                            />
                            <Text style={styles.infoText}>{gene.rep}</Text>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
    renderPhotos(){
        var {gene} = this.props;
        if(gene.photo){
            return ( <View style={styles.photos}>
                <ScrollView
                    horizontal={true}>
                    {gene.photo.split(',').map(p=> {
                        return (
                            <Image
                                key={p}
                                resizeMode={Image.resizeMode.cover}
                                source={{uri:config.imgUrl+p+'.jpg'}}
                                style={{width:120,height:120,marginRight:10}}
                            />
                        )
                    })}

                </ScrollView>
            </View>)
        }
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
        margin: 16
        // backgroundColor:"#4FC3F7"
    },
    psn_id: {
        overflow: 'hidden',
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
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16
    },
    title: {
        flexWrap: 'wrap',
        flex: 1,
    },
    photos: {
        flexDirection: 'row',
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 16,
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
        alignItems: 'center'
    },
    infoIcon: {}
})

export default GeneItem;