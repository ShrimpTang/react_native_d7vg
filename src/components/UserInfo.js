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
    from 'react-native';
import PlatformTip from './PlatformTip'
import moment from 'moment';

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

const userGame = [{
    "gid": "11345",
    "count": "1,6,10,10",
    "psnid": "Tang_zx",
    "ratio": "100",
    "date": "1471274607",
    "cnname": "√Letter",
    "node": "root-letter",
    "title": "√Letter-方根書簡-",
    "platform": "psvita",
    "owner": "938",
    "complete": "540"
}, {
    "gid": "5906",
    "count": "0,0,0,0",
    "psnid": "Tang_zx",
    "ratio": "0",
    "date": "1470580537",
    "cnname": "",
    "node": "ultratron",
    "title": "Ultratron",
    "platform": "ps3,psvita,ps4",
    "owner": "1463",
    "complete": "348"
}, {
    "gid": "2749",
    "count": "0,1,78,0",
    "psnid": "Tang_zx",
    "ratio": "90",
    "date": "1470496342",
    "cnname": "声音与形态",
    "node": "sound-shapes",
    "title": "Sound Shapes",
    "platform": "psvita",
    "owner": "15634",
    "complete": "5034"
}, {
    "gid": "3797",
    "count": "0,0,2,17",
    "psnid": "Tang_zx",
    "ratio": "31",
    "date": "1470409661",
    "cnname": "超凡 双生",
    "node": "beyond-two-souls",
    "title": "Beyond: Two Souls™",
    "platform": "ps3",
    "owner": "17881",
    "complete": "4460"
}, {
    "gid": "7284",
    "count": "1,1,14,34",
    "psnid": "Tang_zx",
    "ratio": "100",
    "date": "1470316935",
    "cnname": "闪乱神乐 EV 少女们的选择",
    "node": "senran-kagura-ev",
    "title": "SENRAN KAGURA ESTIVAL VERSUS",
    "platform": "psvita",
    "owner": "5023",
    "complete": "2207"
}, {
    "gid": "2174",
    "count": "0,0,0,1",
    "psnid": "Tang_zx",
    "ratio": "5",
    "date": "1470031796",
    "cnname": "欢迎公园",
    "node": "welcome-park",
    "title": "Welcome Park",
    "platform": "psvita",
    "owner": "74683",
    "complete": "21387"
}, {
    "gid": "4274",
    "count": "0,0,2,23",
    "psnid": "Tang_zx",
    "ratio": "22",
    "date": "1469704473",
    "cnname": "胧村正",
    "node": "muramasa-rebirth",
    "title": "朧村正",
    "platform": "psvita",
    "owner": "24680",
    "complete": "853"
}, {
    "gid": "3207",
    "count": "0,1,77,0",
    "psnid": "Tang_zx",
    "ratio": "88",
    "date": "1469437811",
    "cnname": "声音与形态",
    "node": "sound-shapes",
    "title": "Sound Shapes",
    "platform": "ps3",
    "owner": "12309",
    "complete": "5223"
}, {
    "gid": "5122",
    "count": "0,0,0,0",
    "psnid": "Tang_zx",
    "ratio": "0",
    "date": "1469436579",
    "cnname": "雨",
    "node": "rain",
    "title": "Lost in the rain",
    "platform": "ps3",
    "owner": "3062",
    "complete": "1172"
}, {
    "gid": "5568",
    "count": "0,1,77,0",
    "psnid": "Tang_zx",
    "ratio": "88",
    "date": "1469430353",
    "cnname": "声音与形态",
    "node": "sound-shapes",
    "title": "Sound Shapes",
    "platform": "ps4",
    "owner": "8512",
    "complete": "2724"
}, {
    "gid": "5569",
    "count": "0,1,77,0",
    "psnid": "Tang_zx",
    "ratio": "88",
    "date": "1469430301",
    "cnname": "声音与形态",
    "node": "sound-shapes",
    "title": "Sound Shapes",
    "platform": "ps4",
    "owner": "4641",
    "complete": "2811"
}, {
    "gid": "9687",
    "count": "0,0,1,0",
    "psnid": "Tang_zx",
    "ratio": "2",
    "date": "1469423823",
    "cnname": "孤岛惊魂 野蛮纪源",
    "node": "far-cry-primal",
    "title": "Far Cry® Primal",
    "platform": "ps4",
    "owner": "9378",
    "complete": "3993"
}, {
    "gid": "6714",
    "count": "0,1,0,14",
    "psnid": "Tang_zx",
    "ratio": "100",
    "date": "1469381662",
    "cnname": "",
    "node": "magical-beat",
    "title": "Magical Beat",
    "platform": "psvita",
    "owner": "2556",
    "complete": "1655"
}, {
    "gid": "4934",
    "count": "0,0,0,0",
    "psnid": "Tang_zx",
    "ratio": "0",
    "date": "1469356374",
    "cnname": "Magical Beat",
    "node": "magical-beat",
    "title": "マジカルビート",
    "platform": "psvita",
    "owner": "1138",
    "complete": "59"
}, {
    "gid": "3978",
    "count": "0,1,3,7",
    "psnid": "Tang_zx",
    "ratio": "100",
    "date": "1469350635",
    "cnname": "绘画公园",
    "node": "paint-park-plus",
    "title": "Paint Park Plus",
    "platform": "psvita",
    "owner": "15537",
    "complete": "9430"
}, {
    "gid": "7756",
    "count": "0,0,0,2",
    "psnid": "Tang_zx",
    "ratio": "9",
    "date": "1469350632",
    "cnname": "方块猫嘉年华",
    "node": "catsblock-vestival",
    "title": "方塊貓嘉年華",
    "platform": "psvita",
    "owner": "4134",
    "complete": "187"
}, {
    "gid": "5280",
    "count": "0,0,0,0",
    "psnid": "Tang_zx",
    "ratio": "0",
    "date": "1469350629",
    "cnname": "疯狂小旅鼠 触摸",
    "node": "lemmings-touch",
    "title": "Lemmings™ Touch",
    "platform": "psvita",
    "owner": "2699",
    "complete": "166"
}, {
    "gid": "5633",
    "count": "0,0,0,1",
    "psnid": "Tang_zx",
    "ratio": "4",
    "date": "1469350626",
    "cnname": "紫氏宝贝",
    "node": "murasaki-baby",
    "title": "Murasaki Baby™",
    "platform": "psvita",
    "owner": "5592",
    "complete": "2975"
}, {
    "gid": "4316",
    "count": "0,0,0,0",
    "psnid": "Tang_zx",
    "ratio": "0",
    "date": "1469346683",
    "cnname": "传奇历史战争 巴顿",
    "node": "legends-of-war-patton",
    "title": "Legends of War",
    "platform": "psvita",
    "owner": "3698",
    "complete": "1074"
}, {
    "gid": "4028",
    "count": "0,0,0,1",
    "psnid": "Tang_zx",
    "ratio": "4",
    "date": "1469341906",
    "cnname": "罪恶装备 XX ΛCORE PLUS R",
    "node": "guilty-gear-xx-λcore-plus",
    "title": "GUILTY GEAR XX ΛCORE PLUS R ",
    "platform": "psvita",
    "owner": "7617",
    "complete": "143"
}];

class UserInfo extends Component {
    render() {
        var game = {
            "gid": "11345",
            "count": "1,6,10,10",
            "psnid": "Tang_zx",
            "ratio": "100",
            "date": "1471274607",
            "cnname": "√Letter",
            "node": "root-letter",
            "title": "√Letter-方根書簡-",
            "platform": "psvita",
            "owner": "938",
            "complete": "540"
        }
        var date = moment(game.date * 1000).fromNow();
        var avatarUri = user.profilepicture ? user.profilepicture : config.photoUrl + user.avatar + '.png@100w.png';
        return (
            <View style={styles.container}>
            <View style={styles.userInfoContainer}>
            <View style={{flexDirection:'column',flex:1}}>
                <View style={{flexDirection:'row',margin:16,marginBottom:4}}>
                    <Image source={{uri:avatarUri}} style={{width: 100,height:100,borderRadius: 50}}/>
                    <View style={{flexDirection:'column',justifyContent:'center',marginLeft:8}}>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>{user.psnid}</Text>
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
                <View style={styles.smallCard}>
                    <Text style={styles.cardCount}>
                        {user.totalgame}
                    </Text>
                    <Text style={styles.cardTitle}>
                        总游戏
                    </Text>
                </View>
                <View style={styles.smallCard}>
                    <Text style={styles.cardCount}>
                        {user.perfect}
                    </Text>
                    <Text style={styles.cardTitle}>
                        完美数
                    </Text>
                </View>
                <View style={styles.smallCard}>
                    <Text style={styles.cardCount}>
                        {user.hole}
                    </Text>
                    <Text style={styles.cardTitle}>
                        坑数
                    </Text>
                </View>
                <View style={styles.smallCard}>
                    <Text style={styles.cardCount}>
                        {user.rarity}
                    </Text>
                    <Text style={styles.cardTitle}>
                        完成率
                    </Text>
                </View>
                <View style={styles.smallCard}>
                    <Text style={styles.cardCount}>
                        {user.befollow}
                    </Text>
                    <Text style={styles.cardTitle}>
                        被关注
                    </Text>
                </View>
            </View>
            </View>
                <View style={styles.userGame}>
                  <View style={{height:70,backgroundColor:'#64B5F6',flexDirection:'row',alignItems:'center'}}>
                      <Image
                          resizeMode={Image.resizeMode.cover}
                          source={{uri:config.psnGameCoverUrl+game.gid+'.png@100w.png'}}
                          style={{height:55,width:100}}
                      />
                      <View style={{flexDirection:'column',flex:1,marginLeft:7}}>
                          <Text style={{color:'black',marginBottom:3}}>{game.cnname}</Text>
                          <Text style={{color:'black',fontSize:12,marginBottom:3}}>{date}</Text>
                          <PlatformTip platform="ps3"/>
                      </View>

                  </View>
                </View>
        </View>
        )
        //(<Image
        //    resizeMode={Image.resizeMode.cover}
        //    source={require('../assets/image/thelastofus.jpg')}
        //    style={[styles.container,{width:width}]}>
        //    <Text>{user.psnid}</Text>
        //</Image>)

    }

    getIcons() {
        var icons = [];
        if (user.plus === "1") {
            icons.push(<Image key="plus" style={{width:15,height:15,alignSelf:'center'}}
                              source={require('../assets/image/plus.png')}/>)
        }
        if (user.region !== "") {
            icons.push(<Image key="flag" style={{width:15,height:15,marginLeft:10,alignSelf:'center'}}
                              source={{uri:config.flagUrl+user.region+'.png'}}/>)
        }
        if (user.level) {
            icons.push(
                <View key="level" style={{flexDirection:'row',marginLeft:10}}>
                    <Image style={{width:15,height:15,alignSelf:'center'}}
                           source={require('../assets/image/level.png')}/>
                    <Text style={{color:'#F9BD0E'}}>{user.level}</Text>
                    <Text style={{color:'rgba(255,255,255,0.4)',marginLeft:6}}>{user.progress}%</Text>
                </View>
            )
        }

        return icons
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column'
    },
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
    userGame:{
        flexDirection:'column'
    }
})
export  default UserInfo