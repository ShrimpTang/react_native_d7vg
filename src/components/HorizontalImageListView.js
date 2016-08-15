var photo1 = "http://ww4.sinaimg.cn/thumb150/43823ba4gw1f6r1wg5sk5j213c0j3142.jpg",
    photo2 = "http://ww4.sinaimg.cn/thumb150/43823ba4gw1f6r23iqhubj20cn07gabb.jpg",
    photo3 = "http://ww4.sinaimg.cn/thumb150/43823ba4gw1f6qzw3b734j203c03cjrb.jpg";

import React,{Component,PropTypes} from 'react';
import {
    View,
    ListView,
    Image,
    ScrollView
} from 'react-native';

class HorizontalImageListView extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
    }

    render() {
        var photos = [{url: photo1}, {url: photo2}, {utl: photo3}];
        var dataSource = this.ds.cloneWithRows(photos);
        return (<ScrollView style={{flex:1,backgroundColor:"#eeffee"}} horizontal={true}>
            <Image resizeMode={Image.resizeMode.cover}
                   source={{uri:photo1}}
                   style={{width:150,height:150, borderWidth: 3, borderColor: '#f099f0'}}
            />
        </ScrollView>)
    }
}


export default HorizontalImageListView;