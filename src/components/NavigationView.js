import React,{Component} from 'react';
import {View,Text,Image,ScrollView} from 'react-native';
import config from '../config';
import UserDetail from './UserDetail';
import Icon from 'react-native-vector-icons/MaterialIcons'
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
    render() {
        console.log(this.props.navigator)
        return (<View style={{flex:1}}>
            <View style={{height:200,backgroundColor:'#1565C0'}}>
                <View style={{marginTop:20}}>
                    <UserDetail user={user} width={90} type="nav"/>
                </View>
            </View>
            <ScrollView style={{flexDirection:'column'}}>

                <View style={{height:50,flexDirection:'row',alignItems:'center'}}>
                    <View style={{flex:.3,justifyContent:'center',alignItems:"center"}}>
                        <Icon name="home" color="#757575" size={25}/>
                    </View>
                    <Text style={{color:'#757575',flex:1}}>社区</Text>
                </View>
                <View style={{height:50,flexDirection:'row',alignItems:'center'}}>
                    <View style={{flex:.3,justifyContent:'center',alignItems:"center"}}>
                        <Icon name="videogame-asset" color="#757575" size={25}/>
                    </View>
                    <Text style={{color:'#757575',flex:1}}>游戏</Text>
                </View>
                <View style={{height:50,flexDirection:'row',alignItems:'center'}}>
                    <View style={{flex:.3,justifyContent:'center',alignItems:"center"}}>
                        <Icon name="store" color="#757575" size={25}/>
                    </View>
                    <Text style={{color:'#757575',flex:1}}>Store</Text>
                </View>
                <View style={{height:50,flexDirection:'row',alignItems:'center'}}>
                    <View style={{flex:.3,justifyContent:'center',alignItems:"center"}}>
                        <Icon name="group" color="#757575" size={25}/>
                    </View>
                    <Text style={{color:'#757575',flex:1}}>约战</Text>
                </View>
                <View style={{height:50,flexDirection:'row',alignItems:'center'}}>
                    <View style={{flex:.3,justifyContent:'center',alignItems:"center"}}>
                        <Icon name="public" color="#757575" size={25}/>
                    </View>
                    <Text style={{color:'#757575',flex:1}}>机因</Text>
                </View>
                <View style={{height:50,flexDirection:'row',alignItems:'center'}}>
                    <View style={{flex:.3,justifyContent:'center',alignItems:"center"}}>
                        <Icon name="settings" color="#757575" size={25}/>
                    </View>
                    <Text style={{color:'#757575',flex:1}}>设置</Text>
                </View>

            </ScrollView>
        </View>)
    }
}
export default NavigationView;