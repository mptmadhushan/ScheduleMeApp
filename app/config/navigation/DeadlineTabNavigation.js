/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';

import CompletedDeadlineScreen from '../../screens/CompletedDeadlineScreen';
import UpcomingDeadlineScreen from '../../screens/UpcomingDeadlineScreen';

const DeadlineTabNavigator = createBottomTabNavigator();

const DeadlineTabNavigation = () => {
  return (
    <DeadlineTabNavigator.Navigator initialRouteName="Upcoming">
      <DeadlineTabNavigator.Screen
        name="Upcoming"
        component={UpcomingDeadlineScreen}
        options={{
          tabBarIcon: ({color}) => {
            return (
              <Icon type="Entypo" style={{color: color}} name="text-document" />
            );
          },
        }}
      />
      <DeadlineTabNavigator.Screen
        name="Completed"
        component={CompletedDeadlineScreen}
        options={{
          tabBarIcon: ({color}) => {
            return (
              <Icon
                type="MaterialIcons"
                style={{color: color}}
                name="done-outline"
              />
            );
          },
        }}
      />
    </DeadlineTabNavigator.Navigator>
  );
};

export default DeadlineTabNavigation;
