import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../../common/Header';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const products = useSelector(state => state);
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [oldData, setOldData] = useState(products.product.data);
  const [searchedList, setSearchList] = useState(oldData);
  const filterData = txt => {
    let newData = oldData.filter(item => {
      return item.title.toLowerCase().match(txt.toLowerCase());
    });
    setSearchList(newData)
    console.log(newData)
  }
  return (
    <View style={styles.container}>
      <Header title={'Search Items'} />
      <View style={styles.searchView}>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../../images/search.png')} style={styles.icon} />
          <TextInput value={search} onChangeText={txt => { setSearch(txt); filterData(txt);}} placeholder='Search Items here...' placeholderTextColor={'#000'} style={styles.input} />
        </View>
        {search !== '' && (
          <TouchableOpacity style={[styles.icon, { justifyContent: 'center', alignItems: 'center' }]} onPress={() => {setSearch(''); filterData('')}}>
          <Image source={require('../../images/clear.png')} style={[styles.icon, { width: 16, height: 16 }]} />
        </TouchableOpacity>
        )}
      </View>
      <View style={{marginTop: 50}}>
      <FlatList data={searchedList} renderItem={({item, index})=>{
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

                <Text style={styles.price}> {'RS' + item.price}</Text>
              </View>
              
              

          </TouchableOpacity>
        )
      }}/>
      </View>
    </View>
  )
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  searchView: {
    width: '90%',
    height: 50,
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center'
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'center',
  },
  input: {
    color: '#000',
    width: '80%',
    marginLeft: 10
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