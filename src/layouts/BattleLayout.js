/**
 * Created by tang on 2016/8/20.
 */
/**
 * Created by Shrimp on 16/7/31.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    RefreshControl,
    Image,
    Dimensions

} from 'react-native'
import {getBattle} from '../services/battleService'
import BattleItem from '../components/BattleItem'
import Separator from '../components/Separator'
import BattleStore from '../stores/BattleStore'
import BattleAction from '../actions/BattleAction'
import connectToStores from 'alt-utils/lib/connectToStores'
import Icon from 'react-native-vector-icons/MaterialIcons'
import moment from 'moment'
@connectToStores
class BattleLayout extends Component {

    static contextTypes = {
        navigator: React.PropTypes.object,
        drawer: React.PropTypes.object
    };

    // 构造
    constructor(props) {
        super(props);
        this.state = {
            day:1
        }
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
    }

    componentDidMount() {
        BattleAction.getBattles()
    }

    onRefresh() {
        BattleAction.getBattles()
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return <Separator key={sectionID+'-'+rowID}/>
    }


    onIconClicked() {
        if (this.context.drawer) {
            this.context.drawer.openDrawer();
        }
    }


    onActionSelected(index) {
        if(index==0)return;
        this.setState({
            day:index
        })
    }

    render() {
        var dataSource;
        if (this.props.battles['day'+this.state.day]) {
             dataSource = this.ds.cloneWithRows(this.props.battles['day'+this.state.day])
        }else{
             dataSource = this.ds.cloneWithRows([])
        }

        var date = [3,4,5,6].map(day=>{
            return {title:moment().add(day, 'd').format('MM月DD日'),show:'never'};
        });

        return (
            <View style={{flex:1}}>
                <Icon.ToolbarAndroid
                    style={{height:56,backgroundColor:"#2196F3"}}
                    title="约战"
                    titleColor="#fff"
                    navIconName="menu"
                    onIconClicked={this.onIconClicked.bind(this)}
                    iconColor={'white'}
                    onActionSelected={this.onActionSelected.bind(this)}
                    actions={[
                              {title:'发布主题',show:'always',iconName:'add'},
                              {title:'今天',show:'never'},
                              {title:'明天',show:'never'},
                              {title:'后天',show:'never'},
                              ...date
                        ]}
                />
                <ListView
                    style={{backgroundColor:'#f9f9f9'}}
                    enableEmptySections={true}
                    dataSource={dataSource}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.isRefreshing}
                            colors={['#1976D2','#1976D2','#BBDEFB']}
                        />}
                    renderRow={rowData=><BattleItem navigator={this.context.navigator} item={rowData}/>}
                    renderSeparator={this.renderSeparator.bind(this)}
                />
            </View>

        );

    }

    static getStores(props) {
        return [BattleStore]
    }

    static getPropsFromStores(props) {
        return BattleStore.getState()
    }
}

export default BattleLayout;