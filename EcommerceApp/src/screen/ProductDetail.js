import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Header from '../common/Header'
import { useNavigation, useRoute } from '@react-navigation/native'

const ProductDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/back.png')}
        rightIcon={require('../images/cart.png')}
        title={'Product Detail'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <Image source={{uri: route.params.data.image}} style={styles.banner}/>
      <Text style={styles.title}>{route.params.data.title}</Text>
      <Text style={styles.desc}>{route.params.data.description}</Text>
      <View style={{flexDirection: 'row'}}>
      <Text style={[styles.price, {color: '#000'}]}>{'Price:'}</Text>
      <Text style={styles.price}>{'RS' + route.params.data.price}</Text>
      </View>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  banner: {
    width: '100%',
    height: 300,
    resizeMode: 'center'
  },
  title:{
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 20
  },
  desc:{
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20
  },
  price:{
    color: 'green',
    marginLeft: 20,
    marginTop: 20,
    fontSize: 20,
    fontWeight: '800'
  }
})