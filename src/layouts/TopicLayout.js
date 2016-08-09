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
import {getTopic} from '../services/topicService'
import TopicItem from '../components/TopicItem'
import Separator from '../components/Separator'
import TopicStore from '../stores/TopicStore'
import TopicAction from '../actions/TopicAction'
import connectToStores from 'alt-utils/lib/connectToStores'
@connectToStores
class TopicLayout extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
    }

    componentDidMount() {
        TopicAction.getTopics({page:1})
    }

    onRefresh() {
        TopicAction.getTopics({page:1})
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return <Separator key={sectionID+'-'+rowID}/>
    }

    onEndReached() {
        TopicAction.getTopics({page: this.props.page+1})
    }

    render() {
        if (this.props.topics.length > 0) {
            var dataSource = this.ds.cloneWithRows(this.props.topics)
            return (
                <ListView
                    enableEmptySections={true}
                    dataSource={dataSource}
                    renderRow={rowData=><TopicItem topic={rowData}/>}
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
        return [TopicStore]
    }

    static getPropsFromStores(props) {
        return TopicStore.getState()
    }
}

export default TopicLayout;