import { StyleSheet, Text, View, ImageBackground, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
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
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageClick = (imageType) => {
      console.log(`Đã click vào hình ảnh ${imageType}`);
      if (selectedImages.includes(imageType)) {
        setSelectedImages(selectedImages.filter((item) => item !== imageType));
      } else {
        setSelectedImages([...selectedImages, imageType]);
      }
    };
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
          <View style={{ position: 'absolute', top: '-15%', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
          
            <Image source={require('../../assets/information/container.png')} style={{ position: 'absolute', top: '40%', width: '80%', height: '20%', resizeMode: 'contain' }} />
            <Image source={require('../../assets/information/present.png')} style={{ position: 'absolute', top: '40%', width: '18%', height: '20%', left: '17%', resizeMode: 'contain' }}/>
            <Image source={require('../../assets/information/present_info.png')} style={{ position: 'absolute', top: '40%', width: '38%', height: '20%', right: '17%', resizeMode: 'contain' }}/>
          </View>

            <View style={{position: 'absolute', top: '38%', width:'80%', height: '35%', flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => handleImageClick('type1')} style={{ flex: 1, margin: 5, resizeMode: "contain"  }}>
                <Image source={require('../../assets/information/noodlesType/type1.png')} style={{ width:"100%", height:"80%", resizeMode: "contain"}}/>
                {selectedImages.includes('type1') && <Image source={require('../../assets/information/pick.png')} style={{ zIndex: -1, top: '-90%', width:'100%', height: '100%', resizeMode: "contain" }}/>}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleImageClick('type2')} style={{ flex: 1, margin: 5, resizeMode: "contain"  }}>
                <Image source={require('../../assets/information/noodlesType/type2.png')} style={{ width:"100%", height:"80%", resizeMode: "contain"}}/>
                {selectedImages.includes('type2') && <Image source={require('../../assets/information/pick.png')} style={{ zIndex: -1, top: '-90%', width:'100%', height: '100%', resizeMode: "contain" }}/>}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleImageClick('type3')} style={{ flex: 1, margin: 5, resizeMode: "contain"  }}>
                <Image source={require('../../assets/information/noodlesType/type3.png')} style={{ width:"100%", height:"80%", resizeMode: "contain"}}/>
                {selectedImages.includes('type3') && <Image source={require('../../assets/information/pick.png')} style={{ zIndex: -1, top: '-90%', width:'100%', height: '100%', resizeMode: "contain" }}/>}
              </TouchableOpacity>
            </View>
            <Image
                source={require('../../assets/information/cupQuantity/3cups.png')}
                style={{ position: 'absolute', top: '59%', width:'50%', height: '20%', resizeMode: "contain" }}
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