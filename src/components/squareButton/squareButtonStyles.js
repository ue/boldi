import { StyleSheet } from 'react-native';
import theme from '../../themes/defaultTheme';

export default StyleSheet.create({
  default: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.squareButtonBackgroundColor,
    borderRadius: 10,
    shadowColor: theme.squareButtonShadowColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: theme.buttonShadowOpacity,
    elevation: 12,
    shadowRadius: 5,
  },
  active: {
    backgroundColor: theme.squareButtonActiveBackground,
    borderColor: theme.squareButtonActiveBorderColor,
    borderWidth: 2,
  },
  disabled: {
    backgroundColor: theme.squareButtonDisabledBackgroundColor,
    shadowColor: theme.primaryWhite,
    borderColor: theme.squareButtonDisabledBorderColor,
    borderWidth: 2,
  },
  disabledChild: {
    color: theme.buttonDisabledColor,
  },
  defaultText: {
    fontWeight: theme.primaryButtonTextWeight,
    color: theme.squareButtonTextColor,
    fontSize: 14,
    padding: 10,
    textAlign: 'center',
    fontFamily: theme.primaryFont,
  },
  activeText: {
    color: theme.squareButtonActiveTextColor,
  },
});
