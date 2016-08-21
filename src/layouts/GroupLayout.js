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
import {getGroup} from '../services/groupService'
import CommonItem from '../components/CommonItem'
import Separator from '../components/Separator'
import GroupStore from '../stores/GroupStore'
import GroupAction from '../actions/GroupAction'
import connectToStores from 'alt-utils/lib/connectToStores'
import Icon from 'react-native-vector-icons/MaterialIcons'
import config from '../config'
@connectToStores
class GroupLayout extends Component {

    static contextTypes = {
        navigator: React.PropTypes.object,
        drawer: React.PropTypes.object
    };

    // 构造
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
    }

    componentDidMount() {
        GroupAction.getGroups({page: 1, groupid: this.props.groupid})
    }

    onRefresh() {
        GroupAction.getGroups({page: 1, groupid: this.props.groupid})
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return <Separator key={sectionID+'-'+rowID}/>
    }

    onEndReached() {
        GroupAction.getGroups({page: this.props.page + 1, groupid: this.props.groupid})
    }

    onIconClicked() {
        if (this.context.drawer) {
            this.context.drawer.openDrawer();
        }
    }


    onActionSelected(index) {
        var navigator = this.context.navigator;
        if (navigator) {
            navigator.push({
                name: 'webView',
                uri: config.baseUrl + 'group/' + this.props.groupid + '/info'
            })
        }
    }

    groupGroupPress(item) {
        var navigator = this.context.navigator;
        if (navigator && item) {
            navigator.push({
                name: 'group',
                groupid: item.groupid
            })
        }
    }

    render() {
        var dataSource;
        if (this.props.groups.length > 0) {
            dataSource = this.ds.cloneWithRows(this.props.groups)
        } else {
            dataSource = this.ds.cloneWithRows([])
        }

        return (
            <View style={{flex:1}}>
                <Icon.ToolbarAndroid
                    style={{height:56,backgroundColor:"#2196F3"}}
                    title={this.props.groupName}
                    titleColor="#fff"
                    navIconName="menu"
                    onIconClicked={this.onIconClicked.bind(this)}
                    iconColor={'white'}
                    onActionSelected={this.onActionSelected.bind(this)}
                    actions={[
                            {title:'说明',show:'always',iconName:'forum'},

                        ]}
                />
                <ListView
                    style={{backgroundColor:'#f9f9f9'}}
                    enableEmptySections={true}
                    dataSource={dataSource}
                    renderRow={rowData=><CommonItem type="group" context={this} navigator={this.context.navigator} item={rowData} groupGroupPress={this.groupGroupPress}/>}
                    refreshControl={
                       <RefreshControl
                         refreshing={this.props.isRefreshing}
                         onRefresh={this.onRefresh.bind(this)}
                         colors={['#1976D2','#1976D2','#BBDEFB']}

                       />}
                    renderSeparator={this.renderSeparator.bind(this)}
                    onEndReached={this.onEndReached.bind(this)}
                    onEndReachedThreshold={10}
                />
            </View>
        );

    }

    static getStores(props) {
        return [GroupStore]
    }

    static getPropsFromStores(props) {
        return GroupStore.getState()
    }
}

export default GroupLayout;