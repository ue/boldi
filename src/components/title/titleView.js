import React from 'react';
import { Text } from 'react-native';

import styles from './titleStyles';

const TitleView = ({ title, size = 22, variant = 'title' }) => {
  return (
    <Text style={[styles.title, { fontSize: size }, styles[variant]]}>
      {title}
    </Text>
  );
};

export { TitleView as Title };
