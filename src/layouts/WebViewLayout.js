/**
 * Created by tang on 2016/8/20.
 */
import React,{Component,PropTypes} from 'react'
import {View,WebView,ToolbarAndroid} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

class WebViewLayout extends Component {
    static contextTypes = {
        navigator: React.PropTypes.object,
        drawer: React.PropTypes.object
    };
    onIconClicked() {
        if (this.context.drawer) {
            this.context.drawer.openDrawer();
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Icon.ToolbarAndroid
                    style={{height:56,backgroundColor:"#2196F3"}}
                    title="PSNINE"
                    titleColor="#fff"
                    navIconName="menu"
                    iconColor={'white'}
                    onIconClicked={this.onIconClicked.bind(this)}
                    actions={[
                            //{title:'收藏',show:'always',iconName:'star-border'},
                            //{title:'感谢',show:'always',iconName:'favorite-border'},
                            //{title:'回复',show:'always',iconName:'reply'},
                        ]}
                />
                <WebView source={{uri:this.props.uri}}/>
            </View>
        )
    }
}
WebViewLayout.propTypes = {
    uri: PropTypes.string.isRequired
}
export default WebViewLayout;