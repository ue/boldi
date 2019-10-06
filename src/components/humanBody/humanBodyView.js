/* eslint-disable no-unused-vars */
import React from 'react';
import { Image, View } from 'react-native';

import BODY_SHAPE from '../../assets/humanbody.png';

import styles from './humanBodyStyles';

const HumanBodyView = ({ goal, steps }) => {
  return (
    <View style={styles.container}>
      <View
        style={[styles.wrapper, { height: (400 * (steps * 100)) / goal / 100 }]}
      />
      <Image style={styles.shape} source={BODY_SHAPE} />
    </View>
  );
};

export { HumanBodyView as HumanBody };
