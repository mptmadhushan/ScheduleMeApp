/* eslint-disable prettier/prettier */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistCombineReducers, persistStore} from 'redux-persist';
import createSensitiveStorage from 'redux-persist-sensitive-storage';

import RootReducer from './RootReducer';
import {
  ANDROID_SHARED_PREF_NAME,
  IOS_KEY_CHAIN_NAME,
} from '../config/Constants';

const storage = createSensitiveStorage({
  keychainService: IOS_KEY_CHAIN_NAME,
  sharedPreferencesName: ANDROID_SHARED_PREF_NAME,
});

const config = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const reducer = persistCombineReducers(config, RootReducer);

export default () => {
  let store = createStore(reducer, applyMiddleware(thunk));
  let persistor = persistStore(store);

  return {store, persistor};
};
