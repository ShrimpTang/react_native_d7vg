import React,{Component,PropTypes} from 'react';
import {View,Text} from 'react-native';

class RatioBar extends Component {
    render() {
        const ratio = this.props.ratio;
        var style = {
            width:parseInt(ratio),
            height:17,

        };
        if (ratio >= 0 && ratio <= 24) {
            style.backgroundColor = '#da314b'
        } else if (ratio >= 25 && ratio <= 49) {
            style.backgroundColor = '#f89406'
        } else if (ratio >= 50 && ratio <= 74) {
            style.backgroundColor = '#8cc14c'
        } else if (ratio >= 75 && ratio <= 100) {
            style.backgroundColor = '#00a8e6'
        }
        return (
            <View style={{backgroundColor:'#666',width:100,height:17}}>
                <View style={style}></View>
                <View style={{width:100,justifyContent:'center',alignItems:'center',position:'absolute',top:0}}>
                    <Text style={{color:'white',fontSize:12}}>{ratio}%</Text>
                </View>

            </View>
        )
    }
}
RatioBar.propTypes = {
    ratio: PropTypes.string.isRequired
}

export default RatioBar;
//0-24 红色
//25-49
//
//50 74#
//75-100  #
//
//
//bg #666