/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  Text,
  Content,
  Button,
  View,
  Icon,
  Pressable,
  Row,
  TouchableHighlight,
  ProgressBarAndroid,
  List,
  ListItem,
} from 'native-base';
import {Alert, Modal, TouchableOpacity} from 'react-native';
import moment from 'moment';
import Slider from '@react-native-community/slider';

import {COLOR_BLUE} from '../config/Constants';
import {IP_ADDRESS} from '../config/Constants';
import {ProgressBar} from '@react-native-community/progress-bar-android';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Software QA Assignment 01',
    date: 8,
    day: 'Jun 14 2020',
    progress: 0.8,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Cloud Computing Report Submission',
    date: 4,
    progress: 0.7,
    day: 'Feb 13 2020',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Knowledge Management Assignment 01',
    date: 9,
    day: 'May 34 2020',

    progress: 0.3,
  },
];
export default class RIpredictionScreen extends Component {
  constructor(props) {
    console.log('constractor');
    super(props);
    this.state = {
      data: [],
      progressNew: {},
      modalVisible: false,
    };
  }
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };
  setProgressNew = (element) => {
    this.setState({progressNew: element});
  };
  async componentDidMount() {
    this.props.navigation.setOptions({
      headerLeft: () => (
        <Icon
          style={{marginLeft: 15, fontSize: 25, color: COLOR_BLUE}}
          type="MaterialIcons"
          name="menu"
          onPress={() => this.props.navigation.openDrawer()}
        />
      ),
    });

    return fetch('http://' + IP_ADDRESS + '/notification')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson});
        console.log('didmount');
        console.log(this.state.data);
        this.render();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  _onPressButton(element, progressNew) {
    this.setModalVisible(true);
    this.setProgressNew(element);
    console.log(element);
    console.log('😆', this.state.progressNew);
  }

  render() {
    console.log('render');
    const {modalVisible} = this.state;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            this.setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {/* <View style={{ alignItems: "right" }}>
              <Text>X</Text>
            </View> */}
              <Text style={styles.modalText}>
                {this.state.progressNew.title}
              </Text>
              <Slider
                onValueChange={(value) => {
                  this.setState({progressNew: value});
                  this.setState((prevState) => {
                    let progressNew = Object.assign({}, prevState.progressNew);
                    progressNew.progress = value;
                    progressNew.title = this.state.progressNew.title;
                    progressNew.date = this.state.progressNew.date;
                    return {progressNew};
                  });
                }}
                step={0.1}
                value={this.state.progressNew.progress}
                style={{width: 200, height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#3eafc2"
                maximumTrackTintColor="#000000"
              />
              <View style={styles.listRow2}>
                <View style={styles.date2n}>
                  <Text style={styles.dateText2}>
                    {this.state.progressNew.progress * 100}%
                  </Text>
                </View>
                <View style={styles.date2n}>
                  <Text style={styles.dateText2}>
                    Pending date date {this.state.progressNew.date}
                  </Text>
                </View>
              </View>
              <View style={styles.listRow3}>
                <TouchableOpacity
                  style={styles.btnCan}
                  onPress={() => this.setModalVisible(!modalVisible)}>
                  <Text style={styles.dateText}>cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnDo}
                  onPress={() => this.setModalVisible(!modalVisible)}>
                  <Text style={styles.dateText2}>done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <List scrollEnabled={true}>
          {DATA.map((element) => (
            <ListItem key={element.id}>
              <View style={styles.item}>
                <View style={element.date < 7 ? styles.date : styles.date2}>
                  <Text
                    style={
                      element.date < 7 ? styles.dateText : styles.dateText2
                    }>
                    Pending date : {element.day}
                  </Text>
                </View>
                <View>
                  <Text style={styles.title}>{element.title}</Text>
                </View>
                <View style={styles.listRow}>
                  <ProgressBar
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={element.progress}
                    color="#2196F3"
                    style={{width: 250, marginTop: -50}}
                  />
                  <Button
                    // onPress={() => this.setModalVisible(true)}
                    onPress={() => this._onPressButton(element)}
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      width: 100,
                      backgroundColor: '#b0ceff',
                      height: 30,
                      color: '#ff3',
                      textColor: '#f32',
                      borderRadius: 10,
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    title="P">
                    <Text style={{fontSize: 10}}>edit</Text>
                  </Button>
                </View>
                <View>
                  <Text
                    style={{
                      marginTop: -50,
                      fontWeight: '900',
                      color: '#b4b4b4',
                    }}>
                    {element.progress * 100}% Completed
                  </Text>
                </View>
              </View>
              {/* <NotificationListItemComponent item={element} /> */}
            </ListItem>
          ))}
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
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
    width: '50%',
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
  buttonContainer: {
    margin: 20,
  },
});

// export default RIPrediction;
