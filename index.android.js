import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    DrawerLayoutAndroid,
    StatusBar,
    Navigator,
    PropTypes
} from 'react-native';
import TopicLayout from './src/layouts/TopicLayout'
import GeneLayout from './src/layouts/GeneLayout'
import UserInfo from './src/components/UserInfo'
import NavigationView from './src/components/NavigationView'
import moment from 'moment';
import momentLocale from 'moment/locale/zh-cn';
moment.updateLocale('zh-cn', momentLocale);

class react_native_d7vg extends Component {

    constructor(props,context){
        super(props,context)
    }
    setNavigator(nav){
        console.log(nav)
    }
    render() {
        var navigationView = (
            <NavigationView />
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth ={350}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                statusBarBackgroundColor='#1565C0'
                renderNavigationView={() => navigationView}
              >
            <View style={{flex: 1}}>
                <Navigator
                    initialRoute={{name:'topic'}}
                    renderScene={this.renderScene}
                    ref={(navigator) => { this.setNavigator(navigator) }}
                />
            </View>
        </DrawerLayoutAndroid>)
    }
    renderScene(route,navigator){
        switch (route.name){
            case 'topic':
                    return <TopicLayout />
                break;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});

AppRegistry.registerComponent('react_native_d7vg', () => react_native_d7vg);
