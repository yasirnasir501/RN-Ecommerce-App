import { View, Text, StyleSheet, FlatList, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../common/Header'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {setProducts(json)})
  } 
  return (
    <View style={styles.container}>
        <Header leftIcon={require('../../images/menu.png')} rightIcon={require('../../images/cart.png')} title={'Grocery App'} onClickLeftIcon={() => {navigation.openDrawer()}}/>

      <FlatList data={products} renderItem={({item, index}) => {
        return (
          <View style={styles.productItem}>
              <Image source={{uri: item.image}} style={styles.itemImage}/>

              <View>

                <Text style={styles.name}>
                {item.title.length > 25 ? item.title.substring(0, 25) + '...' : item.title}
                </Text>

                <Text style={styles.desc}>
                {item.description.length > 30 ? item.description.substring(0, 30) + '...' : item.description}
                </Text>

                <Text style={styles.price}> {'RS' + item.price}</Text>
              </View>
              
              

          </View>
        )
      }}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  productItem:{
    width: Dimensions.get('window').width,
    height: 100,
    marginTop: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemImage: {
    width: 100,
    height: 100
  },
  name:{
    color: '#000',
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 20,
  },
  desc:{
    color: '#000',
    marginLeft: 20
  },
  price:{
    color: 'green',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 5,
  }

})