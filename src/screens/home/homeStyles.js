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
    paddingHorizontal: 50,
    bottom: 75,
  },
  actionsItem: {},
});
