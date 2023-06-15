import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../common/Header'

const Notification = () => {
  return (
    <View style={styles.container}>
      <Header title={'Notification'}/>
    </View>
  )
}

export default Notification
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})