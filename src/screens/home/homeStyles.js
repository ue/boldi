import { StyleSheet } from 'react-native';
import theme from '../../themes/defaultTheme';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  daysWrapper: {
    marginTop: 100,
    width: theme.deviceWidth,
    zIndex: 10,
  },
  itemWrapper: {
    marginHorizontal: 10,
  },
  actionsWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: theme.deviceWidth,
    bottom: 75,
  },
  actionsItem: {
    width: theme.deviceWidth / 3.5,
  },
  infoWrapper: {
    marginTop: 50,
    width: theme.deviceWidth,
    justifyContent: 'space-between',
    flexDirection: 'row',
    zIndex: 30,
  },
  actionsItem2: {
    marginTop: 50,
  },
});
