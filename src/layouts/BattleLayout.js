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
@connectToStores
class BattleLayout extends Component {

    static contextTypes = {
        navigator: React.PropTypes.object,
        drawer: React.PropTypes.object
    };

    // 构造
    constructor(props) {
        super(props);
        console.log('asdfasdf')
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
        console.log(1)
    }

    render() {
        if (this.props.battles.day1) {
            var dataSource = this.ds.cloneWithRows(this.props.battles.day1)
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
                            {title:'全部',show:'never'},
                        ]}
                    />
                    <ListView
                        style={{backgroundColor:'#f9f9f9'}}
                        enableEmptySections={true}
                        dataSource={dataSource}
                        renderRow={rowData=><BattleItem item={rowData}/>}
                        refreshControl={
                       <RefreshControl
                         refreshing={this.props.isRefreshing}
                         onRefresh={this.onRefresh.bind(this)}

                       />}
                        renderSeparator={this.renderSeparator.bind(this)}
                    />
                </View>

            );
        } else {
            return <Separator/>
        }

    }

    static getStores(props) {
        return [BattleStore]
    }

    static getPropsFromStores(props) {
        return BattleStore.getState()
    }
}

export default BattleLayout;