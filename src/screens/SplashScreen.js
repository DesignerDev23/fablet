import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 5000); // 3 seconds
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.icon} />
      <Text style={styles.text}>Welcome to Fablet</Text>
      <Text style={styles.decs}>Empowering Readers Across Africa: The Number one Book App Experience</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0', // Replace with your desired background color
  },
  text: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#000', // Optional: Change text color for better contrast
    marginTop: 20,
  },
  decs: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'gray', // Optional: Change text color for better contrast
    marginTop: 10,
  },
  icon: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
