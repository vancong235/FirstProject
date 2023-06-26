import { StyleSheet, Text, View, ImageBackground, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Information = () => {
    const navigation = useNavigation(); // Lấy navigation prop
    const handlePress = () => {
      console.log('The button was pressed');
      navigation.navigate('Done'); // Chuyển hướng đến màn hình Error
    }
    return (
        <ImageBackground 
        source={require('../../assets/information/bg.png')}
        style={{flex: 1, resizeMode: 'cover', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'column'}}
        >
            <Image
                source={require('../../assets/information/logo.png')}
                style={{ position: 'absolute', top: '7%', height: '10%', resizeMode: "contain" }}
            />
            <Image
                source={require('../../assets/information/info.png')}
                style={{ position: 'absolute', top: '20%', width:'50%', height: '10%', resizeMode: "contain" }}
            />
            <Image
                source={require('../../assets/information/container.png')}
                style={{ position: 'absolute', top: '25%', width:'80%', height: '20%', resizeMode: "contain" }}
            />
            {/* <Image
                source={require('../../assets/information/video.png')}
                style={{ position: 'absolute', top: '27%', width:'80%', height: '25%', resizeMode: "contain" }}
            /> */}
            <View style={{position: 'absolute', top: '31%', width:'80%', height: '35%', flexDirection: 'row' }}>
                <Image source={require('../../assets/information/noodlesType/type1.png')} style={{ flex: 1, margin: 5, resizeMode: "contain"  }} />
                <Image source={require('../../assets/information/noodlesType/type2.png')} style={{ flex: 1, margin: 5, resizeMode: "contain"   }} />
                <Image source={require('../../assets/information/noodlesType/type3.png')} style={{ flex: 1, margin: 5, resizeMode: "contain"  }} />
            </View>
            <Image
                source={require('../../assets/information/cupQuantity/3cups.png')}
                style={{ position: 'absolute', top: '68%', width:'70%', height: '20%', resizeMode: "contain" }}
            />
            <TouchableOpacity onPress={handlePress} style={{  position: 'absolute', top: '68%', width:'70%', height: '20%', resizeMode: "contain",justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'column' }}>
                <Image
                    source={require('../../assets/information/get.png')}
                    style={{ width:'100%', height: '100%', resizeMode: "contain" }}
                />
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default Information

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      width: undefined,
      height: undefined,
    },
  });