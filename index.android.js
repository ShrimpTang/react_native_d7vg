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
    BackAndroid
} from 'react-native';
import TopicLayout from './src/layouts/TopicLayout'
import GeneLayout from './src/layouts/GeneLayout'
import UserInfo from './src/components/UserInfo'
import NavigationView from './src/components/NavigationView'
import moment from 'moment';
import momentLocale from 'moment/locale/zh-cn';
moment.updateLocale('zh-cn', momentLocale);

class react_native_d7vg extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            navigator: null,
            drawer: null
        }
        BackAndroid.addEventListener('hardwareBackPress',()=>{
            var nav = this.state.navigator;
            if(nav && nav.getCurrentRoutes().length>1){
                nav.pop();
                return true;
            }
            return false;
        });
    }

    setNavigator(nav) {
        this.setState({
            navigator: nav
        })
    }

    setDrawer(drawer) {
        this.setState({
            drawer
        })
    }

    static childContextTypes = {
        navigator: React.PropTypes.object,
        drawer: React.PropTypes.object
    };

    getChildContext() {
        return {
            navigator: this.state.navigator,
            drawer: this.state.drawer
        }
    }

    render() {
        var navigationView = (
            <NavigationView  />
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={350}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                statusBarBackgroundColor='#1565C0'
                renderNavigationView={() => navigationView}
                ref={drawer=>{!this.state.drawer?this.setDrawer(drawer):null}}
            >
                <View style={{flex: 1}}>
                    <Navigator
                        initialRoute={{name:'topic'}}
                        renderScene={this.renderScene}
                        ref={(navigator) => {!this.state.navigator ? this.setNavigator(navigator) : null }}
                    />
                </View>
            </DrawerLayoutAndroid>)
    }

    renderScene(route, navigator) {
        console.log(route,navigator)
        switch (route.name) {
            case 'topic':
                return <TopicLayout />
                break;
            case 'gene':
                return <GeneLayout/>
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
