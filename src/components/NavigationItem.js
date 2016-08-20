/**
 * Created by tang on 2016/8/20.
 */
import React,{Component} from 'react'
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

class NavigationItem extends Component {
    render() {
        var {name,iconName,displayName} = this.props;
        return (
            <TouchableOpacity onPress={this.onItemPress.bind(this)}
                              style={{height:50,flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:.3,justifyContent:'center',alignItems:"center"}}>
                    <Icon name={iconName} color="#757575" size={25}/>
                </View>
                <Text style={{color:'#757575',flex:1}}>{displayName}</Text>
            </TouchableOpacity>
        )
    }

    onItemPress() {
        var {navigator,drawer,name} =  this.props;
        if (navigator && drawer) {
            drawer.closeDrawer();
            navigator.push({
                name
            })
        }
    }
}
export  default NavigationItem;