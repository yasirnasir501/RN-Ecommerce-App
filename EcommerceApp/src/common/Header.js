import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

const {height, width} = Dimensions.get("window"); 
const Header = ({title, leftIcon, rightIcon, onClickLeftIcon, onClickRightIcon,}) => {
    const cartItems = useSelector(state => state.cart);
  return (
    <View style={styles.header}>
        <TouchableOpacity style={styles.btn} onPress={() => {onClickLeftIcon()}}>
            <Image source={leftIcon} style={styles.icon}/>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.btn}>
            <Image source={rightIcon} style={styles.icon}/>

            <View style={{width: 20, height: 20, borderRadius: 10, backgroundColor: '#fff', position: 'absolute', right: 0, top: 0, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: '#000'}}>{cartItems.data.length}</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        width: width,
        height: 60,
        backgroundColor: "#0786DAFD",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
    },
    btn:{
        height: 40,
        width: 40,
        justifyContent:'center',
        alignItems: 'center',
    },
    icon:{
        height: 30,
        width: 30,
        tintColor: '#fff'
    },
    title:{
        color: '#fff',
        fontSize: 20,
    }
})