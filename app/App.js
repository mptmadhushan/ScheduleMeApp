/* eslint-disable no-dupe-keys */
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Root} from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import ReactNativeAN from 'react-native-alarm-notification';
const fireDate = '01-01-2060 00:00:00';
import AppStore from './config/AppStore';
import MainNavigation from '../app/config/navigation/MainNavigation';
import PushNotification from 'react-native-push-notification';

const {store, persistor} = AppStore();

const App = () => {
  const testpush = () => {
    console.log('test 😆');
    PushNotification.localNotification({
      title: 'My Notification Title',
      message: 'My Notification Message', // (required)
      channelId: '123',
    });
  };
  const scheduleNotification = () => {
    console.log(Date(Date.now() + 20 * 1000));
    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      message: 'My Notification Message', // (required)
      date: new Date(Date.now() + 10 * 1000), // in 60 secs
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
      channelId: 'not1',
      /* Android Only Properties */
      repeatTime: 1, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
    });
  };
  const LocalNotification = () => {
    console.log('local');
    PushNotification.localNotification({
      channelId: 'not1',
      autoCancel: true,
      bigText:
        'This is local notification demo in React Native app. Only shown, when expanded.',
      subText: 'Local Notification Demo',
      title: 'Local Notification Title',
      message: 'Expand me to see more',
      vibrate: true,
      vibration: 300,
      playSound: true,
      soundName: 'default',
      actions: '["Yes", "No"]',
    });
  };
  useEffect(() => {
    // scheduleNotification();
    scheduleNotification();
    SplashScreen.hide();
    // scheduleNotification();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Root>
          <MainNavigation />
        </Root>
      </PersistGate>
    </Provider>
  );
};

export default App;
