import { StyleSheet } from 'react-native';
import theme from '../../themes/defaultTheme';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: theme.secondaryBackground,
  },
  button: {
    marginTop: 50,
  },
  questionWrapper: {
    alignItems: 'center',
    marginTop: 20,
  },
  genderWrapper: {
    width: theme.deviceWidth / 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  quickInput: {
    width: 75,
    height: 60,
    margin: 10,
    borderRadius: 3,
    textAlign: 'center',
  },
  quickInputsWrapper: {
    flexDirection: 'row',
  },
});
