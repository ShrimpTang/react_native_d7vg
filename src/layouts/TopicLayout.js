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
    ToolbarAndroid
} from 'react-native'
import {getTopic} from '../services/topicService'
import TopicItem from '../components/TopicItem'
import Separator from '../components/Separator'
import TopicStore from '../stores/TopicStore'
import TopicAction from '../actions/TopicAction'
import connectToStores from 'alt-utils/lib/connectToStores'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CommonItem from '../components/CommonItem'
@connectToStores
class TopicLayout extends Component {
    static contextTypes = {
        drawer: React.PropTypes.object
    };

    // 构造
    constructor(props) {
        super(props);
        this.state = {
            node: ''
        }
        // 初始状态
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
    }

    componentDidMount() {
        TopicAction.getTopics({page: 1,node:this.state.node})
    }

    onRefresh() {
        TopicAction.getTopics({page: 1,node:this.state.node})
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return <Separator key={sectionID+'-'+rowID}/>
    }

    onEndReached() {
        TopicAction.getTopics({page: this.props.page + 1,node:this.state.node})
    }

    onIconClicked() {
        if (this.context.drawer) {
            this.context.drawer.openDrawer();
        }
    }

    onActionSelected(index) {
        var node = '';
        switch (index) {
            case 1:
                node = 'news';
                break;
            case 2:
                node = 'guide';
                break;
            case 3:
                node = 'review';
                break;
            case 4:
                node = 'exp';
                break;
            case 5:
                node = 'plus';
                break;
            case 6:
                node = 'openbox';
                break;
            case 7:
                node = 'gamelist';
                break;
            case 8:
                node = 'event';
                break;
        }
        this.setState({
            node
        })
        TopicAction.getTopics({page: 1, node})
    }

    render() {
        if (this.props.topics.length > 0) {
            var dataSource = this.ds.cloneWithRows(this.props.topics)
            return (
                <View style={{flex:1}}>
                    <Icon.ToolbarAndroid
                        style={{height:56,backgroundColor:"#2196F3"}}
                        title="社区"
                        titleColor="#fff"
                        navIconName="menu"
                        onIconClicked={this.onIconClicked.bind(this)}
                        iconColor={'white'}
                        onActionSelected={this.onActionSelected.bind(this)}
                        actions={[
                            {title:'全部',show:'never'},
                            {title:'新闻',show:'never'},//news
                            {title:'攻略',show:'never'},// guide
                            {title:'评测',show:'never'},//review
                            {title:'心得',show:'never'},//exp
                            {title:'Plus',show:'never'},//plus
                           // {title:'二手',show:'never'},//all4all
                            {title:'开箱',show:'never'},//openbox
                            {title:'游列',show:'never'},//gamelist
                            {title:'活动',show:'never'},//event

                        ]}
                    />
                    <ListView
                        style={{backgroundColor:'#f9f9f9'}}
                        enableEmptySections={true}
                        dataSource={dataSource}
                        renderRow={rowData=><CommonItem type="topic" item={rowData}/>}
                        refreshControl={
                       <RefreshControl
                         refreshing={this.props.isRefreshing}
                         onRefresh={this.onRefresh.bind(this)}

                       />}
                        renderSeparator={this.renderSeparator.bind(this)}
                        onEndReached={this.onEndReached.bind(this)}
                        onEndReachedThreshold={10}
                    />

                </View>

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