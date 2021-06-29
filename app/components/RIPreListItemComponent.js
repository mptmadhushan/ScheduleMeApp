/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Modal,
  ProgressBarAndroid,
  Image,
  FlatList,
} from 'react-native';
import Slider from '@react-native-community/slider';

import {COLOR_BLUE} from '../config/Constants';

const NotificationListItemComponent = ({item}) => {
  return (
    <View style={styles.item}>
      <View style={item.date < 7 ? styles.date : styles.date2}>
        <Text style={item.date < 7 ? styles.dateText : styles.dateText2}>
          Pending date {item.date}
        </Text>
      </View>
      <View>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.listRow}>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          color="#2196F3"
          style={{width: 250, marginTop: -50}}
          progress={item.progress}
        />
        <TouchableOpacity
          onPress={() => console.log('hello')}
          // onPress={() => progressUpdate(title, date, progress)}
          style={{
            marginTop: 10,
            marginLeft: 20,
            width: 80,
            backgroundColor: '#b0ceff',
            height: 30,
            borderRadius: 10,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '500', color: '#2d78e8'}}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{marginTop: -50, fontWeight: '900', color: '#b4b4b4'}}>
          {item.progress * 100}% Completed
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#e5eeff",
  },
  modalView: {
    flex: 1,
    padding: 20,
    width: 300,
    maxHeight: 200,
    backgroundColor: '#e5eeff',
    borderWidth: 1,
    borderColor: '#3eafc2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#ebf2ff',
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },

  linearGradient: {
    flex: 1,
  },
  item: {
    paddingHorizontal: 24,
    width: '98%',
    height: 160,
    backgroundColor: '#e5eeff',
    margin: 5,
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: 20,
    borderColor: '#c9dbff',
    borderWidth: 0.9,
  },
  listRow: {
    flex: 1,
    flexDirection: 'row',
  },
  listRow2: {
    flex: 1,
    width: '80%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listRow3: {
    flex: 1,
    width: '70%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  date: {
    backgroundColor: '#ffdbf4',
    width: '30%',
    height: 20,
    marginVertical: 5,
    borderRadius: 10,
    padding: 1,
    paddingLeft: 10,
  },
  date2: {
    backgroundColor: '#ccf2fb',
    width: '30%',
    height: 20,
    marginVertical: 5,
    borderRadius: 10,
    padding: 1,
    paddingLeft: 10,
  },
  date2n: {
    backgroundColor: '#ccf2fb',
    height: 20,
    marginVertical: 5,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  btnCan: {
    backgroundColor: '#ffdbf4',
    height: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#ef13b2',
    marginRight: 5,
  },
  btnDo: {
    marginLeft: 5,
    backgroundColor: '#ccf2fb',
    height: 30,
    width: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#3eafc2',
    borderRadius: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },

  dateText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ef13b2',
  },
  dateText2: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#3eafc2',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#111',
  },
});

export default NotificationListItemComponent;
