import { StyleSheet } from 'react-native';
import theme from '../../themes/defaultTheme';

export default StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: theme.primaryFont,
    color: theme.titleColor,
    fontWeight: '800',
    marginBottom: 10,
    width: theme.deviceWidth,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 9,
    color: theme.subTextColor,
    fontWeight: '600',
    fontFamily: theme.primaryFont,
  },
});
