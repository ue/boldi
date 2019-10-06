/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './squareButtonStyles';

const SquareButtonView = ({
  title = 'Button',
  style,
  onPress,
  disabled,
  iconName,
  iconSize,
  isActive,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.default,
        { ...style },
        isActive && styles.active,
        disabled && styles.disabled,
      ]}>
      {iconName ? (
        <Icon name={iconName} size={iconSize} />
      ) : (
        <Text
          style={[
            styles.defaultText,
            isActive && styles.activeText,
            disabled && styles.disabledChild,
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export { SquareButtonView as SquareButton };
