import { StyleSheet, Text, View, ImageBackground, StatusBar, Image, TouchableOpacity,  Animated} from 'react-native'
import { Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import React, { useState } from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const Home = () => {
    const navigation = useNavigation(); // Lấy navigation prop

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const onGestureEvent = event => {
      setPosition({
        x: event.nativeEvent.translationX,
        y: event.nativeEvent.translationY
      });
    };
    var processX = 0;
    var processY = 0;


    const onHandlerStateChange = event => {
      if (event.nativeEvent.oldState === 4) {
        setPosition({
          x: processX,
          y: processY,
        });
        navigation.navigate('Qrcode'); // Chuyển hướng đến màn hình Error
      }
    };
  
    return (
        <ImageBackground 
        source={require('../../assets/common/bg.png')}
        style={{flex: 1, resizeMode: 'cover', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'column'}}
        >
            <Image
                source={require('../../assets/common/logo.png')}
                style={{ position: 'absolute', top: '7%', height: '10%', resizeMode: "contain" }}
            />
            <Image
                source={require('../../assets/common/welcome.png')}
                style={{ position: 'absolute', top: '20%', width:'50%', height: '10%', resizeMode: "contain" }}
            />
            <Image
                source={require('../../assets/common/video.png')}
                style={{ position: 'absolute', top: '27%', width:'80%', height: '25%', resizeMode: "contain" }}
            />
            <Image
                source={require('../../assets/common/qr.png')}
                style={{ position: 'absolute', top: '56%', width:'70%', height: '20%', resizeMode: "contain" }}
            />
            <PanGestureHandler 
            onHandlerStateChange={onHandlerStateChange}
            onGestureEvent={onGestureEvent}>
              <Animated.Image 
               source={require('../../assets/common/drag.png')}
                style={[
                  styles.image,
                  {
                    width: "28%", height: '33%', resizeMode: "contain",
                    transform: [
                      { translateX: position.x },
                      { translateY: position.y }
                    ]
                  }
                ]}
                onLoad={() => {
                  processX = position.x;
                  processY = position.y;
                }}
              />
          </PanGestureHandler>
            {/* <TouchableOpacity onPress={handlePress} style={{ position: 'absolute', top: '75%', width:'33%', height: '19%', resizeMode: "contain",justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'column' }}>
                <Image
                    source={require('../../assets/common/drag.png')}
                    style={{width: "100%", height: '100%', resizeMode: "contain" }}
                />
            </TouchableOpacity> */}
            <View style={{ position: 'absolute', top: '80%', right: '9%', bottom: 0 }}>
            <Image
                source={require('../../assets/common/rect.png')}
                style={{width: windowWidth*0.15, height: windowHeight*0.07, resizeMode: "contain" }}
            />
            </View>
        </ImageBackground>
    )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImageContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})