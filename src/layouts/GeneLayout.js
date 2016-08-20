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
import {getGene} from '../services/geneService'
import CommonItem from '../components/CommonItem'
import Separator from '../components/Separator'
import GeneStore from '../stores/GeneStore'
import GeneAction from '../actions/GeneAction'
import connectToStores from 'alt-utils/lib/connectToStores'
@connectToStores
class GeneLayout extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
    }

    componentDidMount() {
        GeneAction.getGenes({page:1})
    }

    onRefresh() {
        GeneAction.getGenes({page:1})
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
      //  var {height, width} = Dimensions.get('window');
       // return <Image source={require('../assets/image/ttt.png')}  key={sectionID+'-'+rowID} style={{width:width}}/>
        return <Separator key={sectionID+'-'+rowID}/>
    }

    onEndReached() {
        GeneAction.getGenes({page: this.props.page+1})
    }

    render() {
        if (this.props.genes.length > 0) {
            var dataSource = this.ds.cloneWithRows(this.props.genes)
            return (
                <ListView
                    style={{backgroundColor:'#f9f9f9'}}
                    enableEmptySections={true}
                    dataSource={dataSource}
                    renderRow={rowData=><CommonItem type="gene" item={rowData}/>}
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
        return [GeneStore]
    }

    static getPropsFromStores(props) {
        return GeneStore.getState()
    }
}

export default GeneLayout;