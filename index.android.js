import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import TopicLayout from './src/layouts/TopicLayout'
import GeneLayout from './src/layouts/GeneLayout'
import Hilv from './src/components/HorizontalImageListView'

import moment from 'moment';
import momentLocale from 'moment/locale/zh-cn'; // 多這一行
moment.updateLocale('zh-cn', momentLocale); // 改這一行

class react_native_d7vg extends Component {
    render() {
        return (
            <View style={styles.container}>
                <GeneLayout/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});

AppRegistry.registerComponent('react_native_d7vg', () => react_native_d7vg);
