import { StyleSheet } from 'react-native';
import theme from '../../themes/defaultTheme';

export default StyleSheet.create({
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: theme.buttonShadowColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: theme.buttonShadowOpacity,
    elevation: 12,
    shadowRadius: 5,
  },
  primary: {
    backgroundColor: theme.primaryButton,
    borderRadius: theme.primaryButtonRadius,
  },
  primaryText: {
    fontWeight: theme.primaryButtonTextWeight,
    color: theme.primaryButtonText,
  },
  secondary: {
    backgroundColor: theme.secondaryButton,
    borderRadius: theme.secondaryButtonRadius,
  },
  secondaryText: {
    fontWeight: theme.secondaryButtonTextWeight,
    color: theme.secondaryButtonText,
  },
  md: {
    width: theme.deviceWidth / 2,
  },
  sm: {
    width: theme.deviceWidth / 3,
  },
  mdText: {
    fontSize: 18,
    fontFamily: theme.primaryFont,
  },
  smText: {
    fontSize: 16,
    fontFamily: theme.primaryFont,
  },
  disabled: {
    backgroundColor: theme.buttonDisabledColor,
  },
});
