import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../common/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import CustomButton from '../common/CustomButton'
import { useDispatch } from 'react-redux'
import { addItemToWishList } from '../redux/slices/WishlistSlice'
import { addItemToCart } from '../redux/slices/CartSlice'

const ProductDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1)
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
      <ScrollView>
        <Image source={{ uri: route.params.data.image }} style={styles.banner} />
        <Text style={styles.title}>{route.params.data.title}</Text>
        <Text style={styles.desc}>{route.params.data.description}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.price, { color: '#000' }]}>{'Price:'}</Text>
          <Text style={styles.price}>{'RS' + route.params.data.price}</Text>

          <View style={styles.qtyView}>
            <TouchableOpacity style={styles.btn} onPress={() => {
              if (qty > 1) {
                setQty(qty - 1);
              }
            }}>
              <Text style={{ color: '#000', fontSize: 18, fontWeight: '600' }}>-</Text>
            </TouchableOpacity>

            <Text style={styles.qty}>{qty}</Text>

            <TouchableOpacity style={styles.btn} onPress={() => {
              setQty(qty + 1);
            }}>
              <Text style={{ color: '#000', fontSize: 18, fontWeight: '600' }}>+</Text>
            </TouchableOpacity>
          </View>

        </View>
        <TouchableOpacity style={styles.WishListBtn} onPress={() => {
          dispatch(addItemToWishList(route.params.data));
        }}>
          <Image source={require('../images/wishlist.png')} style={styles.icon} />
        </TouchableOpacity>



        <CustomButton bg={'#FF9A0C'} title={'Add To Cart'} color={'#fff'} onClick={() => {
          console.log(route.params.data)
          dispatch(addItemToCart({
            
              category: route.params.data.category,
              description: route.params.data.description,
              id: route.params.data.id,
              image: route.params.data.image,
              price: route.params.data.price,
              qty: qty,
              rating: route.params.data.rating,
              title: route.params.data.title,
            }),
            );
        }}
         />
      </ScrollView>
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
  title: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 20
  },
  desc: {
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20
  },
  price: {
    color: 'green',
    marginLeft: 20,
    marginTop: 20,
    fontSize: 20,
    fontWeight: '800'
  },
  WishListBtn: {
    position: 'absolute',
    right: 20,
    top: 337,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    elevation: 5
  },
  icon: {
    width: 24,
    height: 24
  },
  qtyView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
    marginLeft: 20,
  },
  btn: {
    padding: 5,
    borderWidth: 0.5,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 10
  },

  qty: {
    color: '#000',
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '600'
  },
})