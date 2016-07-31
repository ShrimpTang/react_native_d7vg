/**
 * Created by Shrimp on 16/7/31.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView
} from 'react-native'
import {getTopic} from '../services/topicService'
import TopicItem from '../components/TopicItem'
class TopicLayout extends Component {


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
        this.state = {
            topics: this.ds.cloneWithRows([])
        };
    }

    componentDidMount() {
        getTopic()
            .then(topics=> {
                this.setState({
                    topics: this.ds.cloneWithRows(topics.data)
                })
            })
    }

    render() {
        return (
           <ListView
               enableEmptySections={true}
               dataSource={this.state.topics}
               renderRow={rowData=><TopicItem topic={rowData}/>}
           />
        );
    }
}

export default TopicLayout;