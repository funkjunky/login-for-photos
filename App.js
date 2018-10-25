import React from 'react';
import { createStackNavigator } from 'react-navigation';

import PhotosScreen from './screens/PhotosScreen';
import HomeScreen from './screens/HomeScreen';

export default createStackNavigator(
  {
    HomeScreen,
    PhotosScreen,
  }, {
    initialRouteScreen: 'HomeScreen',
  }
);
