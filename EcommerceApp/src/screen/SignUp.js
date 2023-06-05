import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../common/CustomButton';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('')

  const addUser = () => {
    firestore()
      .collection('Users')
      .add({
        name: name,
        email: email,
        mobile: mobile,
        password: pass,
      })
      .then(() => {
        console.log('User added!');
        navigation.navigate('Login')
      });
  }


  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{'Sign Up'}</Text>
        <TextInput placeholder='Enter Name' placeholderTextColor={'#000'} style={styles.input} value={name} onChangeText={txt => setName(txt)} />
        <TextInput placeholder='Enter Email' placeholderTextColor={'#000'} style={styles.input} value={email} onChangeText={txt => setEmail(txt)} />
        <TextInput placeholder='Enter Mobile' placeholderTextColor={'#000'} style={styles.input} value={mobile} onChangeText={txt => setMobile(txt)} />
        <TextInput placeholder='Enter Password' placeholderTextColor={'#000'} style={styles.input} value={pass} onChangeText={txt => setPass(txt)} />
        <TextInput placeholder='Enter Confirm Password' placeholderTextColor={'#000'} style={styles.input} value={confirmPass} onChangeText={txt => setConfirmPass(txt)} />
        <CustomButton bg={'#FF9A0C'} title={'Sign Up'} color={'#fff'}
          onClick={() => {
            addUser();
          }}
        />
        <Text style={styles.loginText} onPress={() => {
          navigation.navigate('Login')
        }}>
          {'Login'}
        </Text>
      </ScrollView>
    </View>
  )
}

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    color: '#000',
    fontSize: 40,
    marginLeft: 20,
    marginTop: 50,
    marginBottom: 50
  },
  input: {
    color: '#000',
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    paddingLeft: 20,
    alignSelf: 'center',
    marginTop: 10
  },
  loginText: {
    color: '#000',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 20,
    textDecorationLine: 'underline'
  }
})