/**
 * Created by Shrimp on 16/8/16.
 */
import React,{Component} from 'react';
import config from '../config/index'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
}
    from 'react-native'
const user = {
    "psnid": "Tang_zx",
    "region": "hk",
    "name": "Tang_zx",
    "aboutme": "",
    "plus": "1",
    "avatar": "JP0031\/CUSA01054_00-AVATAR1505NEP010_085CC956F3B47D170BED_l",
    "profilepicture": "",
    "point": "29355",
    "level": "13",
    "progress": "66",
    "platinum": "11",
    "gold": "69",
    "silver": "465",
    "bronze": "481",
    "rank": "9116",
    "totalgame": "115",
    "perfect": "13",
    "hole": "85",
    "rarity": "18.37",
    "follow": "2",
    "befollow": "2",
    "topic": "1",
    "fav": "5",
    "shoucang": "5",
    "nb": "1152",
    "qidaodate": "1471281625",
    "datadate": "1471274649"
};
class UserInfo extends Component {
    render() {
        var {width,height} = Dimensions.get('window');
        var avatarUri = user.profilepicture ? user.profilepicture : config.photoUrl + user.avatar + '.png@70w.png';
        return (<View style={styles.container}>
            <View style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row',margin:16,marginBottom:4}}>
                    <Image source={{uri:avatarUri}} style={{width: 45,height:45,borderRadius: 50}}/>
                    <View style={{flexDirection:'column',justifyContent:'center',marginLeft:8}}>
                        <Text style={{color:'white',fontWeight:'bold'}}>{user.psnid}</Text>
                        <View style={{flexDirection:'row',marginTop:5}}>
                            {this.getIcons()}
                        </View>
                    </View>

                </View>
                <View style={{height:1,backgroundColor:"#BBDEFB"}}/>
            </View>

        </View>)
        //(<Image
        //    resizeMode={Image.resizeMode.cover}
        //    source={require('../assets/image/thelastofus.jpg')}
        //    style={[styles.container,{width:width}]}>
        //    <Text>{user.psnid}</Text>
        //</Image>)

    }

    getIcons() {
        var icons = [];
        if(user.plus==="1"){
            icons.push(<Image key="plus" style={{width:15,height:15}} source={require('../assets/image/plus.png')}/>)
        }
        if(user.region!==""){
            icons.push(<Image key="flag" style={{width:15,height:15,marginLeft:10}} source={{uri:config.flagUrl+user.region+'.png'}}/>)
        }
        if(user.level){
            icons.push(<Image key="level" style={{width:15,height:15,marginLeft:10}} source={require('../assets/image/level.png')}/>)
        }

        return icons
    }
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: '#1565C0'
    }
})
export  default UserInfo