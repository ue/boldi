import React from 'react';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import { useScreens } from 'react-native-screens';
import { setTopLevelNavigator } from './src/services/navigationService';

import { ApplicationContainer } from './src/containers';

useScreens();

import App from './src/config/routes';

import store from './src/redux/store';

export default () => {
  return (
    <ApplicationContainer>
      <Provider store={store}>
        <App
          ref={navigatorRef => {
            setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    </ApplicationContainer>
  );
};
