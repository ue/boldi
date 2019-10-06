import { StyleSheet } from 'react-native';
import theme from '../../themes/defaultTheme';

export default StyleSheet.create({
  textInput: {
    fontSize: 16,
    color: theme.primaryTextColor,
    borderWidth: 1,
    borderColor: theme.titleColor,
    width: theme.deviceWidth / 1.5,
    height: 45,
    paddingHorizontal: 20,
    borderRadius: 45 / 2,
    shadowColor: theme.shadowColor,
    marginVertical: 15,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: theme.shadowOpacity,
    shadowRadius: 5,
    elevation: 12,
  },
});
