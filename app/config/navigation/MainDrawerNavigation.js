/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {connect} from 'react-redux';

import {logout} from '../../data/actions/AuthAction';
import ProfileScreen from '../../screens/ProfileScreen';
import HomeScreen from '../../screens/HomeScreen';
import ModulesScreen from '../../screens/ModulesScreen';
import NotificationsScreen from '../../screens/NotificationsScreen';
import DrawerHeaderComponent from '../../components/DrawerHeaderComponent';
import ActionBarImage from '../../components/ActionBarImage';
import RIpredictionScreen from '../../screens/RIpredictionScreen';
import {COLOR_BLUE} from '../../config/Constants';
import TodayScreen from '../../screens/TodayScreen';
import NewTaskScreen from '../../screens/NewTaskScreen';
import DeadlineTabNavigation from './DeadlineTabNavigation';
import CalendarScreen from '../../screens/CalendarScreen';
import ScreenTimeScreen from '../../screens/ScreenTimeScreen';
import SettingsScreen from '../../screens/SettingsScreen';

const MainDrawerNavigator = createDrawerNavigator();

const MainDrawerNavigation = ({logout}) => {
  return (
    <MainDrawerNavigator.Navigator
      initialRouteName="Home"
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerHeaderComponent />
            <DrawerItemList {...props} />
            <DrawerItem label="Log out" onPress={() => logout()} />
          </DrawerContentScrollView>
        );
      }}>
      <MainDrawerNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: '',
          drawerLabel: 'Home',
          headerRight: () => <ActionBarImage />,
        }}
      />
      <MainDrawerNavigator.Screen
        name="Notification"
        component={NotificationsScreen}
        options={{
          headerShown: true,
          headerTintColor: COLOR_BLUE,
          headerTitle: 'Notifications',
          drawerLabel: 'Notifications',
          headerRight: () => <ActionBarImage />,
        }}
      />
      <MainDrawerNavigator.Screen
        name="RIpredictionScreen"
        component={RIpredictionScreen}
        options={{
          headerShown: true,
          headerTintColor: COLOR_BLUE,
          headerTitle: 'Progress',
          drawerLabel: 'Progress',
          headerRight: () => <ActionBarImage />,
        }}
      />
      <MainDrawerNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          headerTintColor: COLOR_BLUE,
          headerTitle: 'My Profile',
          drawerLabel: 'My Profile',
          headerRight: () => <ActionBarImage />,
        }}
      />
      <MainDrawerNavigator.Screen
        name="Today"
        component={TodayScreen}
        options={{
          headerShown: true,
          headerTintColor: COLOR_BLUE,
          headerTitle: "Today's Schedule",
          drawerLabel: "Today's Schedule",
        }}
      />
      <MainDrawerNavigator.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          headerShown: true,
          headerTintColor: COLOR_BLUE,
          headerTitle: 'Calendar',
          drawerLabel: 'Calendar',
        }}
      />
      <MainDrawerNavigator.Screen
        name="Modules"
        component={ModulesScreen}
        options={{
          headerShown: true,
          headerTintColor: COLOR_BLUE,
          headerTitle: 'Modules',
          drawerLabel: 'Modules',
          headerRight: () => <ActionBarImage />,
        }}
      />
      <MainDrawerNavigator.Screen
        name="NewTask"
        component={NewTaskScreen}
        options={{
          headerShown: true,
          headerTintColor: COLOR_BLUE,
          headerTitle: 'New Task',
          drawerLabel: 'New Task',
        }}
      />
      <MainDrawerNavigator.Screen
        name="Deadline"
        component={DeadlineTabNavigation}
        options={{
          headerShown: true,
          headerTintColor: COLOR_BLUE,
          headerTitle: 'Deadlines',
          drawerLabel: 'Deadlines',
          headerRight: () => <ActionBarImage />,
        }}
      />
      <MainDrawerNavigator.Screen
        name="ScreenTime"
        component={ScreenTimeScreen}
        options={{
          headerShown: true,
          headerTintColor: COLOR_BLUE,
          headerTitle: 'Screen Time',
          drawerLabel: 'Screen Time',
          headerRight: () => <ActionBarImage />,
        }}
      />
      <MainDrawerNavigator.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: true,
          headerTintColor: COLOR_BLUE,
          headerTitle: 'Settings',
          drawerLabel: 'Settings',
          headerRight: () => <ActionBarImage />,
        }}
      />
    </MainDrawerNavigator.Navigator>
  );
};

mapStateToProps = (state) => ({});

mapDispatchToProps = {
  logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainDrawerNavigation);
