/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { TextInput } from '..';

import styles from './phoneCodeStyles';

const PhoneCodeView = ({ handleOnDone }) => {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <TextInput
        focus={number === 0}
        maxLength={1}
        autoFocus
        onChange={val => setNumber(number + (val ? 1 : 0))}
        style={styles.item}
        type="number"
      />
      <TextInput
        focus={number === 1}
        maxLength={1}
        onChange={val => setNumber(number + (val ? 1 : -1))}
        style={styles.item}
        type="number"
      />
    </View>
  );
};

export { PhoneCodeView as PhoneCode };
