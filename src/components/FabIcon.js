import React,{Component,PropTypes} from 'react';
import {
    View
} from 'react-native';
import  Icon from 'react-native-vector-icons/MaterialIcons';

class FabIcon extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var style = {
            backgroundColor: '#eeeeee',
            borderRadius: 50,
            height: 36,
            width: 36,
            justifyContent: 'center',
            alignItems: 'center'
        };
        if (this.props.style) {
            Object.assign(style, this.props.style);
        }
        return (<View
            style={style}>
            {this.props.icon}
        </View>)
    }
}

FabIcon.propTypes = {
    icon: PropTypes.element.isRequired,
    style: PropTypes.object
}

export default FabIcon;