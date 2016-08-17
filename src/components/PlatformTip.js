/**
 * Created by Shrimp on 16/8/17.
 */
import React,{Component,PropTypes} from 'react';
import {View,Text,StyleSheet} from 'react-native';

class PlatformTip extends Component {
    render() {
        var style = {
            width: 30,
            height: 17,
            justifyContent: 'center',
            alignItems: 'center'
        }
            , text;
        switch (this.props.platform) {
            case 'ps3':
                text = 'PS3';
                style.backgroundColor = '#F05561';
                break;
            case 'ps4':
                text = 'PS4';
                style.backgroundColor = '#8662DD';
                break;
            case 'psvita':
                text = 'PSV';
                style.backgroundColor = '#0AAAE9';
                break;
        }

        return (
            <View style={style}>
                <Text style={{color:'white',fontSize:10}}>{text}</Text>
            </View>
        )
    }
}

PlatformTip.propTypes = {
    platform: PropTypes.string.isRequired
}

export default PlatformTip