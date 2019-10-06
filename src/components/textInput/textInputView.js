import React, { createRef, useEffect } from 'react';
import { TextInput } from 'react-native';

import styles from './textInputStyles';

const fetchData = async ref => {
  await ref.current.focus();
};

const TextInputView = ({
  placeholder,
  type,
  value,
  onChange,
  style,
  focus,
  ...props
}) => {
  const ref = createRef();
  useEffect(() => {
    if (focus) {
      fetchData(ref);
    }
  }, [focus, ref]);
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.textInput, { ...style }]}
      onChangeText={onChange}
      ref={ref}
      type={type}
      value={value}
      {...props}
    />
  );
};

export { TextInputView as TextInput };
