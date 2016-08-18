import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import config from '../config';
import UserDetail from './UserDetail'
var user = {
    "psnid": "Tang_zx",
    "region": "hk",
    "name": "Tang_zx",
    "aboutme": "",
    "plus": "1",
    "avatar": "JP0031\/CUSA01054_00-AVATAR1505NEP010_085CC956F3B47D170BED_l",
    "profilepicture": "",
    "point": "29370",
    "level": "13",
    "progress": "67",
    "platinum": "11",
    "gold": "69",
    "silver": "465",
    "bronze": "482",
    "rank": "9125",
    "totalgame": "115",
    "perfect": "13",
    "hole": "85",
    "rarity": "18.38",
    "follow": "2",
    "befollow": "2",
    "topic": "1",
    "fav": "5",
    "shoucang": "5",
    "nb": "1190",
    "qidaodate": "1471485933",
    "datadate": "1471490136"
}
class NavigationView extends Component {
    render() {
        return (<View style={{flex:1}}>
            <View style={{height:200,backgroundColor:'#1565C0'}}>
                <View style={{marginTop:20}}>
                    <UserDetail user={user} width={90} type="nav"/>
                </View>
            </View>
        </View>)
    }
}
export default NavigationView;