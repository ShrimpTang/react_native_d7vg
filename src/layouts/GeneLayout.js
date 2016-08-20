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
import Icon from 'react-native-vector-icons/MaterialIcons'
@connectToStores
class GeneLayout extends Component {

    static contextTypes = {
        navigator: React.PropTypes.object,
        drawer: React.PropTypes.object
    };

    // 构造
    constructor(props) {
        super(props);
        this.state={
            type:'all'
        }
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
    }

    componentDidMount() {
        GeneAction.getGenes({page:1,type:this.state.type})
    }

    onRefresh() {
        GeneAction.getGenes({page:1,type:this.state.type})
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
      //  var {height, width} = Dimensions.get('window');
       // return <Image source={require('../assets/image/ttt.png')}  key={sectionID+'-'+rowID} style={{width:width}}/>
        return <Separator key={sectionID+'-'+rowID}/>
    }

    onEndReached() {
        GeneAction.getGenes({page: this.props.page+1,type:this.state.type})
    }

    onIconClicked() {
        if (this.context.drawer) {
            this.context.drawer.openDrawer();
        }
    }


    onActionSelected(index) {
        var type = 'all';
        switch (index) {
            case 1:
                type = 'photo';
                break;
            case 2:
                type = 'music';
                break;
            case 3:
                type = 'movie';
                break;
            case 4:
                type = 'video';
                break;
        }
        this.setState({
            type
        })
        GeneAction.getGenes({page: 1, type})
    }

    render() {
        if (this.props.genes.length > 0) {
            var dataSource = this.ds.cloneWithRows(this.props.genes)
            return (
                <View style={{flex:1}}>
                    <Icon.ToolbarAndroid
                        style={{height:56,backgroundColor:"#2196F3"}}
                        title="机因"
                        titleColor="#fff"
                        navIconName="menu"
                        onIconClicked={this.onIconClicked.bind(this)}
                        iconColor={'white'}
                        onActionSelected={this.onActionSelected.bind(this)}
                        actions={[
                            {title:'全部',show:'never'},
                            {title:'图文类',show:'never'},
                            {title:'音乐类',show:'never'},
                            {title:'影视类',show:'never'},
                            {title:'视屏类',show:'never'},

                        ]}
                    />
                    <ListView
                        style={{backgroundColor:'#f9f9f9'}}
                        enableEmptySections={true}
                        dataSource={dataSource}
                        renderRow={rowData=><CommonItem type="gene" navigator={this.context.navigator} item={rowData}/>}
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
        return [GeneStore]
    }

    static getPropsFromStores(props) {
        return GeneStore.getState()
    }
}

export default GeneLayout;