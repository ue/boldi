import React from 'react';
import { Text } from 'react-native';

import styles from './titleStyles';

const TitleView = ({ title, size, variant = 'title' }) => {
  return (
    <Text style={[styles.title, styles[variant], size && { fontSize: size }]}>
      {title}
    </Text>
  );
};

export { TitleView as Title };
