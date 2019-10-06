import React from 'react';
import { ImageBackground, View, Text, StatusBar } from 'react-native';
import { navigate } from '../../services/navigationService';
import { Button } from '../../components';
import ROUTES from '../../constants/routeNames';

import BACKGROUND_IMAGE from '../../assets/background.png';
import styles from './greetingStyles';

const GreetingScreen = () => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.container}
      source={BACKGROUND_IMAGE}>
      <StatusBar hidden />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Take care of you and your planet</Text>
        <Button
          title="Start you move"
          onPress={() => navigate(ROUTES.SCREENS.CHARACTER)}
        />
      </View>
    </ImageBackground>
  );
};

export default GreetingScreen;
