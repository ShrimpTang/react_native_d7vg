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
    Dimensions,
    TouchableNativeFeedback
} from 'react-native'
import config from '../config';
import moment from 'moment';
import  Icon from 'react-native-vector-icons/MaterialIcons';
import FabIcon  from './FabIcon';
class CommonItem extends React.Component {
    static defaultProps = {
        type: 'gene'
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }

    onItemPress() {
        var {item,type,navigator} = this.props;
        if(type=='group'){
            type='gene'
        }
        if (item && type && navigator) {
            var uri = config.baseUrl + type + '/' + item.id;
            navigator.push({
                name: 'webView',
                uri
            })
        }
    }

    avatarOnPress(){
        var {navigator} = this.props;
        if(navigator){
            navigator.push({
                name: 'userInfo',
            })
        }
    }

    render() {
        var {item,type} = this.props;
        if (type == 'topic') {
            item.$$preview = item.title;
        } else {
            item.$$preview = item.content;
        }
        var avatarUri = item.profilepicture ? item.profilepicture : config.photoUrl + item.avatar + '.png@50png';
        var date = moment(item.date * 1000).fromNow();
        return (
            <View>
                <TouchableNativeFeedback  onPress={this.onItemPress.bind(this)}  style={styles.container}>
                    <View>
                    <View style={styles.head}>
                        <TouchableOpacity onPress={this.avatarOnPress.bind(this)} style={{flex:1,flexDirection:'row',alignItems:'center'}}>
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
                            <Text>{item.$$preview}</Text>
                        </View>
                    </View>
                    {this.renderPhotos.bind(this)()}
                    <View style={styles.info}>
                        <View style={{flex:1,flexDirection:'row'}}>
                            {
                                //<View style={{marginTop:4,marginLeft:2}}>
                                //    <Icon name="play-arrow" size={12} color={"#0f9d58"}/>
                                //</View>
                            }
                            {
                                type == 'gene' ?
                                    <TouchableOpacity onPress={this.props.geneGroupPress.bind(this.props.context,item)} style={{marginLeft:2}}>
                                        <Text style={{fontSize:12,color:"#0f9d58"}}>{item.title}</Text>
                                    </TouchableOpacity>
                                    :
                                    <View></View>
                            }

                        </View>
                        <View style={styles.infoType}>
                            <FabIcon
                                style={{  marginRight: 8, width: 24,height: 24}}
                                icon={
                                        <Icon name="remove-red-eye" size={14}
                                        color="#6d6d6d"/>
                                    }
                            />
                            <Text style={{fontSize:12,color:'#7b7b7b',marginRight:6}}>{item.views}</Text>
                        </View>
                        <View style={styles.infoType}>
                            <FabIcon
                                style={{ marginRight: 8,width: 24, height: 24}}
                                icon={
                                        <Icon name="insert-comment" size={14}
                                        color="#6d6d6d"/>
                                    }
                            />
                            <Text style={styles.infoText}>{type == 'topic' ? item.count : item.rep}</Text>
                        </View>
                    </View>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    renderPhotos() {
        var {height, width} = Dimensions.get('window');
        var {item} = this.props;
        var photo;
        if ((photo = item.photo) || (photo = item.thumb)) {

            return ( <View style={[styles.photos]}>
                <ScrollView
                    horizontal={true}>
                    {photo.split(',').map((p, i)=> {
                        if (i > 2)return;
                        return (
                            <Image
                                key={p}
                                resizeMode={Image.resizeMode.cover}
                                source={{uri:config.imgUrl+p+'.jpg'}}
                                style={{width:90,height:90,marginRight:4}}
                            />
                        )
                    })}

                </ScrollView>
            </View>)
        }
        if (item.plus) {
            if (item.plus.cover && item.type == 'music') {
                return (<View style={{marginLeft:10}}>
                    <Image source={{uri:item.plus.cover}} style={{width:119,height:119}}/>
                    <Image style={{position:'absolute',top:-1,left:0}}
                           esizeMode={Image.resizeMode.cover}
                           source={require('../assets/image/cover.png')}/>
                </View>)
            }
            if (item.type == 'movie' && item.plus.cover) {
                var plus = item.plus;
                return (
                    <View style={{marginLeft:10,flexDirection:'row'}}>
                        <Image style={{width:80,height:120}} source={{uri:config.movieCover+plus.cover}}/>
                        <View style={{flexDirection:'column',marginLeft:10}}>
                                <Text style={styles.movieText}>{plus.title}</Text>
                                <Text style={[styles.movieText,{color:'#F44336'}]}>{plus.rate}分</Text>
                                <Text style={styles.movieText}>{plus.pubdate}/{plus.durations}</Text>
                                <Text style={styles.movieText}>{plus.countries}</Text>
                                <Text style={styles.movieText}>{plus.genres}</Text>

                        </View>
                    </View>
                )
            }
            if (item.plus.img) {
                return (<View style={{marginLeft:10}}>
                    <Image source={{uri:item.plus.img}} style={{width:160,height:90}}/>
                </View>)
            }

        }
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: "#ffffff",
        flex:1,
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
    movieText:{
        color:'#969696',
        fontSize:12,
        flex:1
    }
})

export default CommonItem;