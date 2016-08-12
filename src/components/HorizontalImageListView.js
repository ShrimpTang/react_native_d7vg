var photo1 = "http://ww4.sinaimg.cn/thumb150/43823ba4gw1f6r1wg5sk5j213c0j3142.jpg",
    photo2 = "http://ww4.sinaimg.cn/thumb150/43823ba4gw1f6r23iqhubj20cn07gabb.jpg",
    photo3 = "http://ww4.sinaimg.cn/thumb150/43823ba4gw1f6qzw3b734j203c03cjrb.jpg";

import React,{Component,PropTypes} from 'react';
import {
    View,
    ListView,
    Image
} from 'react-native';

class HorizontalImageListView extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
    }

    render() {
        var photos = [{url:photo1},{url:photo2},{utl:photo3}];
        var dataSource = this.ds.cloneWithRows(photos);
        return (<ListView
                dataSource={dataSource}
                renderRow={rowData=>{
                    return <Image  source={{uri: rowData.url}} style={{width:100,height:200}}/>
                }}
        />)
    }
}


export default HorizontalImageListView;