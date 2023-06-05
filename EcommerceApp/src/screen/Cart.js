import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../common/Header';
import { useNavigation } from '@react-navigation/native';
import { addItemToCart, reduceItemToCart, removeItemToCart } from '../redux/slices/CartSlice';
import CheckoutLayout from '../common/CheckoutLayout';

const Cart = () => {
  const items = useSelector(state => state.cart);
  const [cartItems, setCartItems] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    setCartItems(items.data)
  }, [items]);

  const getTotal = () => {
    let total = 0;
    cartItems.map(item => {
      total = total + item.qty * item.price
    })
    return total.toFixed(0);
  }
  return (
    <View style={styles.container}>
      <View style={{height: 55, width: '100%', backgroundColor:'#0786DAFD'}}>
        <Text style={{color: '#fff', fontSize: 20, justifyContent: 'center', alignSelf: 'center', marginTop: 10}}>Cart Items</Text>
      </View>
      {/* <Header title={'Cart Items'}/> */}
      <FlatList data={cartItems} renderItem={({item, index}) => {
        return(
          <TouchableOpacity activeOpacity={1} style={styles.productItem} onPress={() => {navigation.navigate('ProductDetail', {data: item})}}>
              <Image source={{uri: item.image}} style={styles.itemImage}/>

              <View>

                <Text style={styles.name}>
                {item.title.length > 25 ? item.title.substring(0, 25) + '...' : item.title}
                </Text>

                <Text style={styles.desc}>
                {item.description.length > 30 ? item.description.substring(0, 30) + '...' : item.description}
                </Text>

                <View style={styles.qtyView}>
                <Text style={styles.price}> {'RS' + item.price}</Text>

                <TouchableOpacity style={styles.btn} onPress={() => {
                  if (item.qty > 1) {
                    dispatch(reduceItemToCart(item))
                  } else {
                    dispatch(removeItemToCart(index));
                  }
                }}>
                  <Text style={{color: '#000', fontSize: 18, fontWeight: '600'}}>-</Text>
                </TouchableOpacity>
                  
                  <Text style={styles.qty}>{item.qty}</Text>

                <TouchableOpacity style={styles.btn} onPress={() => {
                  dispatch(addItemToCart(item));
                }}>
                  <Text style={{color: '#000', fontSize: 18, fontWeight: '600'}}>+</Text>
                </TouchableOpacity>

                </View>

              </View>
              
          </TouchableOpacity>
        )
      }}/>

      {cartItems.length < 1 && (
        <View style={styles.noItems}>
          <Text style={{color: '#000'}}>No Items in cart</Text>
        </View>
      )}

      {cartItems.length>0 && (
      <CheckoutLayout  items={cartItems.length} total={getTotal()}/>
      )}
      
    </View>
  )
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  qtyView:{
   flexDirection: 'row' ,
   alignItems: 'center',
   marginTop: 10
  },

  btn:{
   padding: 5,
   borderWidth: 0.5,
   width: 30,
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 10,
   marginLeft: 10
  },

  qty:{
    color: '#000',
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '600'
  },
  noItems:{
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }

})