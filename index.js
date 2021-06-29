/* eslint-disable no-dupe-keys */
import {AppRegistry} from 'react-native';

import App from './app/App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';

// PushNotification.createChannel(
//   {
//     channelId: '123', // (required)
//     channelName: 'My channel', // (required)
//     channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
//     playSound: false, // (optional) default: true
//     soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
//     importance: 4, // (optional) default: Importance.HIGH. Int value of the Android notification importance
//     vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
//   },
//   (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
// );
// PushNotification.configure({
//   onRegister: function (token) {
//     console.log('TOKEN:', token);
//   },

//   onNotification: function (notification) {
//     console.log('NOTIFICATION:', notification);
//   },

//   permissions: {
//     alert: true,
//     badge: true,
//     sound: true,
//   },

//   popInitialNotification: true,
//   requestPermissions: true,
//   // eslint-disable-next-line no-undef
//   requestPermissions: Platform.OS === 'ios',
// });
PushNotification.configure({
  // (required) Called when a remote or local notification is opened or received
  onNotification: function (notification) {
    console.log('LOCAL NOTIFICATION ==>', notification);
  },

  popInitialNotification: true,
  // eslint-disable-next-line no-undef
  requestPermissions: Platform.OS === 'ios',
});

PushNotification.createChannel(
  {
    channelId: 'not1', // (required)
    channelName: 'Channel', // (required)
  },
  (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
);
AppRegistry.registerComponent(appName, () => App);
