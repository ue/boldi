import React, { useState } from 'react';
import { View } from 'react-native';
import { navigate } from '../../services/navigationService';

import { Title, TextInput, Button, SquareButton } from '../../components';
import ROUTES from '../../constants/routeNames';

import styles from './characterStyles';

const LoginScreen = () => {
  const [gender, setGender] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.questionWrapper}>
        <Title title="What is your gender?" />
        <View style={styles.genderWrapper}>
          {/* // Should be icon but didint work */}
          <SquareButton
            title="M"
            isActive={gender === 'M'}
            onPress={() => setGender('M')}
          />
          <SquareButton
            title="F"
            isActive={gender === 'F'}
            onPress={() => setGender('F')}
          />
        </View>
      </View>

      <View style={styles.questionWrapper}>
        <Title title="Age and weight?" />
        <View style={styles.quickInputsWrapper}>
          <TextInput style={styles.quickInput} placeholder="18" type="phone" />
          <TextInput style={styles.quickInput} placeholder="70" type="phone" />
        </View>
      </View>

      <View style={styles.questionWrapper}>
        <Title title="What is your goal?" />
        <TextInput placeholder="2500" type="phone" />
        <Title
          title="Average daily step count is between 5000 - 7000"
          variant="subTitle"
        />
      </View>

      <Button
        style={styles.button}
        title="Go"
        size="sm"
        onPress={() => navigate(ROUTES.SCREENS.HOME)}
      />
    </View>
  );
};

export default LoginScreen;
