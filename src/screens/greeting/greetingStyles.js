import { StyleSheet } from 'react-native';
import theme from '../../themes/defaultTheme';

export default StyleSheet.create({
  layer: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'black',
    width: theme.deviceWidth,
    height: theme.deviceHeight,
    opacity: 0.1,
    zIndex: 1,
  },
  container: {
    width: theme.deviceWidth,
    height: theme.deviceHeight,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  wrapper: {
    marginBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    color: theme.primaryWhite,
    marginBottom: 30,
    width: theme.deviceWidth / 1.5,
    textAlign: 'center',
    shadowColor: theme.buttonShadowColor,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: theme.buttonShadowOpacity,
    elevation: 12,
    shadowRadius: 5,
    fontFamily: theme.primaryFont,
  },
});
