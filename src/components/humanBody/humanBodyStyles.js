import { StyleSheet } from 'react-native';
import theme from '../../themes/defaultTheme';

export default StyleSheet.create({
  container: {
    width: theme.deviceWidth,
    height: theme.deviceHeight,
    alignItems: 'center',
    position: 'absolute',
  },
  wrapper: {
    backgroundColor: theme.primaryBackground,
    width: 300,
    bottom: 212,
    position: 'absolute',
  },
  shape: {
    height: 400,
    width: 300,
    top: 200,
    position: 'absolute',
  },
});
