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
    Dimensions,
    ListView,
    ScorllView,
    ToastAndroid,
    TouchableNativeFeedback
}
    from 'react-native';
import PlatformTip from './PlatformTip';
import RatioBar from './RatioBar';
import Separator from './Separator';
import UserDetail from './UserDetail'
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons'

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

const user = {
    "psnid": "Tang_zx(模拟数据)",
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
    static contextTypes = {
        navigator: React.PropTypes.object,
        drawer: React.PropTypes.object
    };

    constructor(props){
        super(props)
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
    }
    onIconClicked() {
        if (this.context.drawer) {
            this.context.drawer.openDrawer();
        }
    }

    onActionSelected(index) {
        ToastAndroid.show('并不能同步',ToastAndroid.SHORT)
    }

    render() {
        var dataSource = this.ds.cloneWithRows(userGame);

        return (
            <View style={{flex:1}}>
                <Icon.ToolbarAndroid
                    style={{height:56,backgroundColor:"#1565C0"}}
                    title={user.psnid}
                    titleColor="#fff"
                    navIconName="menu"
                    onIconClicked={this.onIconClicked.bind(this)}
                    iconColor={'white'}
                    onActionSelected={this.onActionSelected.bind(this)}
                    actions={[
                             {title:'同步',show:'always',iconName:'refresh'}
                        ]}
                />
                <ListView
                    renderSeparator={this.renderSeparator.bind(this)}
                    style={{flex:1}}
                    dataSource={dataSource}
                    renderRow={rowData=>{return <GameItem key={rowData.gid} game={rowData}/>}}
                    renderHeader={()=><UserDetail user={user} width={70} type="game"/>}
                />

            </View>
        )
        //(<Image
        //    resizeMode={Image.resizeMode.cover}
        //    source={require('../assets/image/thelastofus.jpg')}
        //    style={[styles.container,{width:width}]}>
        //    <Text>{user.psnid}</Text>
        //</Image>)

    }
    renderSeparator(sectionID, rowID, adjacentRowHighlighted){
        return (<Separator key={sectionID+'-'+rowID}/>)
    }

}


const GameItem = (props) =>{
    var game = props.game;
    var date = moment(game.date * 1000).fromNow();
    return <TouchableNativeFeedback >
        <View style={{height:70,flexDirection:'row',alignItems:'center',marginLeft:5,marginRight:5,backgroundColor:'white'}}>
        <Image
            resizeMode={Image.resizeMode.cover}
            source={{uri:config.psnGameCoverUrl+game.gid+'.png@100w.png'}}
            style={{height:55,width:100}}
        />
        <View style={{flexDirection:'column',flex:1,marginLeft:7}}>
            <Text style={{color:'#3498db',marginBottom:3}}>{game.cnname}</Text>
            <Text style={{color:'#AAA',fontSize:12,marginBottom:3}}>{date}</Text>
            <View style={{flexDirection:'row'}}>
                {
                    game.platform.split(',').map(pl=> {
                        return <PlatformTip style={{marginRight:5}} key={pl} platform={pl}/>
                    })
                }
            </View>
        </View>
        <View style={{alignSelf:'flex-end',paddingBottom:10,}}>
            <RatioBar ratio={game.ratio}/>
        </View>
        </View>
    </TouchableNativeFeedback>}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
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
    userGame: {
        flexDirection: 'column'
    }
})
export  default UserInfo