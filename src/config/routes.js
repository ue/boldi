import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ROUTES from '../constants/routeNames';
import { GreetingScreen, CharacterScreen, HomeScreen } from '../screens';

const stackNavigation = createStackNavigator(
  {
    [ROUTES.SCREENS.GREETING]: {
      screen: GreetingScreen,
      navigationOptions: {
        header: () => null,
      },
    },
    [ROUTES.SCREENS.CHARACTER]: {
      screen: CharacterScreen,
      navigationOptions: {
        header: () => null,
      },
    },
    [ROUTES.SCREENS.HOME]: {
      screen: HomeScreen,
      navigationOptions: {
        header: () => null,
      },
    },
  },
  {
    headerMode: 'none',
  },
);

const RootNavigator = createSwitchNavigator(
  {
    stackNavigation,
  },
  {
    initialRouteName: ROUTES.SCREENS.SPLASH,
  },
);

export default createAppContainer(RootNavigator);
