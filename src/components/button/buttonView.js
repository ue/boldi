/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, View, TouchableOpacity, Text } from 'react-native';

import styles from './buttonStyles';

const ButtonView = ({
  title,
  style,
  onPress,
  size = 'md',
  variant = 'primary',
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        styles[variant],
        styles[size],
        disabled && styles.disabled,
        { ...style },
      ]}>
      <Text style={[styles[`${variant}Text`], styles[`${size}Text`]]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export { ButtonView as Button };
