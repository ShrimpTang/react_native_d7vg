import React,{Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import config from '../config';

class UserDetail extends Component {
    render() {
        var {user,width=100,type} = this.props;
        var style={};
        if(type=='game'){
            style.height = 150;
        }
        var avatarUri = user.profilepicture ? user.profilepicture : config.photoUrl + user.avatar + '.png@' + width + 'w.png';
        return (
            <View style={[styles.userInfoContainer,style]}>
                <View style={{flexDirection:'column',flex:1}}>
            <View style={{flexDirection:'row',margin:12,marginBottom:4}}>
            <Image source={{uri:avatarUri}} style={{width,height:width,borderRadius: 50}}/>
            <View style={{flexDirection:'column',justifyContent:'center',marginLeft:8}}>
                {
                    type=='game'?<Text></Text>:<Text style={{color:'white',fontWeight:'bold',fontSize:18}}>{user.psnid}</Text>
                }
                <View style={{flexDirection:'row',marginTop:5}}>
                    {this.getIcons()}
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#7a96d1'}}>白{user.platinum}</Text>
                    <Text style={{color:'#cd9a46',marginLeft:5}}>金{user.gold}</Text>
                    <Text style={{color:'#a6a6a6',marginLeft:5}}>银{user.silver}</Text>
                    <Text style={{color:'#bf6a3a',marginLeft:5}}>铜{user.bronze}</Text>
                    {
                        //<Text style={{color:'rgba(255,255,255,0.4)',marginLeft:3}}>总{parseInt(user.platinum)+parseInt(user.gold)+parseInt(user.silver)+parseInt(user.bronze)}</Text>
                    }
                </View>
            </View>
        </View>
                </View>
                <View style={{backgroundColor: '#1976D2',height:50,flexDirection:'row'}}>
                    {this.getBottom()}

                </View>
            </View>
                    )
    }

    getIcons() {
        var {type='game',user} = this.props;
        var icons = [];
        if (user.plus === "1") {
            icons.push(<Image key="plus" style={{width:15,height:15,alignSelf:'center'}}
                              source={require('../assets/image/plus.png')}/>)
        }
        if (user.region !== "") {
            icons.push(<Image key="flag" style={{width:15,height:15,marginLeft:10,alignSelf:'center'}}
                              source={{uri:config.flagUrl+user.region+'.png'}}/>)
        }
        if (user.level && type=='game') {
            icons.push(
                <View key="level" style={{flexDirection:'row',marginLeft:10}}>
                    <Image style={{width:15,height:15,alignSelf:'center'}}
                           source={require('../assets/image/level.png')}/>
                    <Text style={{color:'#F9BD0E'}}>{user.level}</Text>
                    <Text style={{color:'rgba(255,255,255,0.4)',marginLeft:6}}>{user.progress}%</Text>
                </View>
            )
        }
        if(type!='game' &&  user.nb){
            var nb = parseInt(user.nb);
            var gold = Math.floor(nb/10000);
            nb = nb - gold *10000;
            var silver  = Math.floor(nb/100);
            nb = nb - silver *100;
            var str = '';
            if(gold!=0){
                str+=gold+'金';
            }
            if((gold!=0 && silver==0) || (gold==0 && silver!=0)){
                str+=silver+'银';
            }
            str +=nb+'铜';
            icons.push(
                <View key="level" style={{flexDirection:'row',marginLeft:10}}>
                    <Image style={{width:15,height:15,alignSelf:'center'}}
                           source={require('../assets/image/money.png')}/>
                    <Text style={{color:'rgba(255,255,255,0.4)',marginLeft:6}}>{str}</Text>
                </View>
            )
        }
        return icons
    }

    getBottom(){
        var user = this.props.user,
            bottoms=[];
        var {type='game'} = this.props;
        if(type=='game'){
            bottoms.push(<View key="totalgame" style={styles.smallCard}>
                <Text style={styles.cardCount}>
                    {user.totalgame}
                </Text>
                <Text style={styles.cardTitle}>
                    总游戏
                </Text>
            </View>);
            bottoms.push(<View key="perfect" style={styles.smallCard}>
                <Text style={styles.cardCount}>
                    {user.perfect}
                </Text>
                <Text style={styles.cardTitle}>
                    完美数
                </Text>
            </View>);
            bottoms.push(<View key="hole" style={styles.smallCard}>
                <Text style={styles.cardCount}>
                    {user.hole}
                </Text>
                <Text style={styles.cardTitle}>
                    坑数
                </Text>
            </View>);
            bottoms.push(<View key="rarity" style={styles.smallCard}>
                <Text style={styles.cardCount}>
                    {user.rarity}
                </Text>
                <Text style={styles.cardTitle}>
                    完成率
                </Text>
            </View>);
            bottoms.push(<View key="befollow" style={styles.smallCard}>
                <Text style={styles.cardCount}>
                    {user.befollow}
                </Text>
                <Text style={styles.cardTitle}>
                    被关注
                </Text>
            </View>);
        }else{
            bottoms.push(<View key="topic" style={styles.smallCard}>
                <Text style={styles.cardCount}>
                    {user.topic}
                </Text>
                <Text style={styles.cardTitle}>
                    帖子
                </Text>
            </View>);
            bottoms.push(<View key="follow" style={styles.smallCard}>
                <Text style={styles.cardCount}>
                    {user.follow}
                </Text>
                <Text style={styles.cardTitle}>
                    关注
                </Text>
            </View>);
            bottoms.push(<View key="shoucang" style={styles.smallCard}>
                <Text style={styles.cardCount}>
                    {user.shoucang}
                </Text>
                <Text style={styles.cardTitle}>
                    收藏
                </Text>
            </View>);
        }
        return bottoms;
    }
}

const styles = StyleSheet.create({
    userInfoContainer: {
        height: 180,
        backgroundColor: '#1565C0',
    },
    smallCard: {
        flexDirection: 'column',
        backgroundColor: '#1E88E5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardCount: {
        color: "rgba(255,255,255,0.8)"
    },
    cardTitle: {
        color: 'rgba(255,255,255,0.4)',
        fontSize: 12
    },
    userGame: {
        flexDirection: 'column'
    }
})
UserDetail.propTypes = {
    user: React.PropTypes.object.isRequired
}
export default UserDetail
