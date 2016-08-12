/**
 * Created by Shrimp on 16/7/31.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    RefreshControl
} from 'react-native'
import {getGane} from '../services/ganeService'
import GaneItem from '../components/GaneItem'
import Separator from '../components/Separator'
import GaneStore from '../stores/GaneStore'
import GaneAction from '../actions/GaneAction'
import connectToStores from 'alt-utils/lib/connectToStores'
@connectToStores
class GaneLayout extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
    }

    componentDidMount() {
        GaneAction.getGanes({page:1})
    }

    onRefresh() {
        GaneAction.getGanes({page:1})
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return <Separator key={sectionID+'-'+rowID}/>
    }

    onEndReached() {
        GaneAction.getGanes({page: this.props.page+1})
    }

    render() {
        if (this.props.ganes.length > 0) {
            var dataSource = this.ds.cloneWithRows(this.props.ganes)
            return (
                <ListView
                    style={{backgroundColor:'#f9f9f9'}}
                    enableEmptySections={true}
                    dataSource={dataSource}
                    renderRow={rowData=><GaneItem gane={rowData}/>}
                    refreshControl={
                       <RefreshControl
                         refreshing={this.props.isRefreshing}
                         onRefresh={this.onRefresh.bind(this)}

                       />}
                    renderSeparator={this.renderSeparator.bind(this)}
                    onEndReached={this.onEndReached.bind(this)}
                    onEndReachedThreshold={10}
                />
            );
        } else {
            return <Separator/>
        }

    }

    static getStores(props) {
        return [GaneStore]
    }

    static getPropsFromStores(props) {
        return GaneStore.getState()
    }
}

export default GaneLayout;