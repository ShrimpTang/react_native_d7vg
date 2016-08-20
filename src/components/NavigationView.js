import React,{Component} from 'react';
import {View,Text,Image,ScrollView,TouchableOpacity} from 'react-native';
import config from '../config';
import UserDetail from './UserDetail';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationItem from  './NavigationItem';
var user = {
    "psnid": "Tang_zx(模拟数据)",
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
    static contextTypes = {
        navigator: React.PropTypes.object,
        drawer:React.PropTypes.object
    };
    render() {
        return (<View style={{flex:1}}>
            <View style={{height:200,backgroundColor:'#1565C0'}}>
                <View style={{marginTop:20}}>
                    <UserDetail user={user} width={90} type="nav"/>
                </View>
            </View>
            <ScrollView style={{flexDirection:'column'}}>
                <NavigationItem {...this.context} name="topic" displayName="社区" iconName="home"/>
                <NavigationItem {...this.context} name="game" displayName="游戏" iconName="videogame-asset"/>
                <NavigationItem {...this.context} name="store" displayName="Store" iconName="store"/>
                <NavigationItem {...this.context} name="group" displayName="约战" iconName="group"/>
                <NavigationItem {...this.context} name="gene" displayName="机因" iconName="public"/>
                <NavigationItem {...this.context} name="settings" displayName="设置" iconName="settings"/>
            </ScrollView>
        </View>)
    }
    onItemPress(name){
        var {navigator,drawer} =  this.context;
        if(navigator && drawer){
            drawer.closeDrawer();
            navigator.push({
                name
            })

        }
    }
}
export default NavigationView;