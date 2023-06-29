import React from 'react';
import { StyleSheet, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QRScreen() {
  const qrValue = 'https://example.com'; // giá trị của mã QR code

  return (
    <View style={styles.container}>
      <QRCode
        value={qrValue}
        size={200}
        color='black'
        backgroundColor='white'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});