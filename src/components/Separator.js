/**
 * Created by Shrimp on 16/7/31.
 */
import React,{Component} from 'react'
import {
    View,
    StyleSheet
}
    from 'react-native'
class Separator extends  Component{
    render(){
        return <View   style={styles.separator}></View>
    }
}
export default Separator;

const styles = StyleSheet.create({
    separator:{
        height:1,
        flex:1,
        backgroundColor:'#E4E4E4',
    }
})