import {View, Text, Image, StyleSheet} from 'react-native';
import React, {FC, useEffect} from 'react';
import {navigate} from '../utils/NavigationUtil';
import {commonStyles} from '../styles/commonStyles';

const SplashScreen: FC = () => {
  const navigateToHome = () => {
    navigate('HomeScreen');
  };
  useEffect(() => {
    const timeout = setTimeout(navigateToHome, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <View style={[commonStyles.container, styles.overrideContainer]}>
      <Image
        style={commonStyles.img}
        source={require('../assets/images/new_logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overrideContainer: {
    backgroundColor: '#1F1F1F', 
  },
});

export default SplashScreen;
