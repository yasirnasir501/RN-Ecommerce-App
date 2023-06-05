import { View, Text, Modal, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const AskForLoginModal = ({modalVisible, onClickLogin, onClickSignUp, onClose}) => {
  return (
    <Modal visible={modalVisible} transparent>
        <View style={styles.modalView}>
            <View style={styles.mainView}>
                <TouchableOpacity style={[styles.btn, {marginTop: 70}]} onPress={() => {
                    onClickLogin();
                }}>
                    <Text style={styles.btnText}>{'Login'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, {marginBottom: 20, marginTop: 20}]} onPress={() => {
                    onClickSignUp();
                }}>
                <Text style={styles.btnText}>{'Sign Up'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.clearBtn} onPress={() => {
                    onClose();
                }}>
                    <Image source={require('../images/clear.png')} style={styles.icon}/>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
  )
}

export default AskForLoginModal;
const styles = StyleSheet.create({
    modalView:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'absolute',
        top: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainView:{
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '90%',
    },
    btn:{
        width: '86%',
        height: 50,
        alignSelf: 'center',
        backgroundColor: '#e08d07',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText:{
       color: '#fff',
       fontSize: 18 
    },
    icon:{
        width: 24,
        height: 24
    },
    clearBtn:{
        position: 'absolute',
        top: 20,
        right: 20,
    }
})