/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Content, Icon, Grid, Row, Col} from 'native-base';
import {TextInput, TouchableOpacity} from 'react-native';

import {COLOR_BLUE, COLOR_GREEN, COLOR_RED} from '../config/Constants';
import SyncStorage from 'sync-storage';

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      result: '',
    };
  }
  handleEmail = (text) => {
    this.setState({email: text});
    console.log(this.state.email);
  };
  handleSubmit = () => {
    console.log('clicked');
    // const data = SyncStorage.init();
    // console.log('AsyncStorage is ready!', data);
    // console.log('clicked');
    // SyncStorage.set('homeText', email);
    // const result = SyncStorage.get('homeText');
    // console.log(result);
  };
  _onPressButton(element) {
    console.log('😆', this.state.progressNew);
    const data = SyncStorage.init();
    console.log('AsyncStorage is ready!', data);
    console.log('clicked');
    SyncStorage.set('homeText', this.state.email);
    const result = SyncStorage.get('homeText');
    console.log(result);
  }
  async componentDidMount() {
    const data = await SyncStorage.init();
    console.log('AsyncStorage is ready!', data);
    const result = SyncStorage.get('homeText');

    console.log(result); // 'bar'
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
  }

  render() {
    return (
      <Content>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 15,
            color: COLOR_GREEN,
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          General
        </Text>
        <Grid style={{marginHorizontal: 20, marginVertical: 15}}>
          <Row style={{paddingBottom: 20}}>
            <Col>
              <Text
                style={{
                  marginLeft: 15,
                  color: COLOR_BLUE,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Linked Accounts
              </Text>
            </Col>
            <Col>
              <Row style={{alignSelf: 'center'}}>
                <Icon type="AntDesign" name="google" />
                <Icon type="AntDesign" name="facebook-square" />
                <Icon type="AntDesign" name="linkedin-square" />
              </Row>
            </Col>
          </Row>
          <Row style={{paddingBottom: 20}}>
            <Col>
              <Text
                style={{
                  marginLeft: 15,
                  color: COLOR_BLUE,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Background Color
              </Text>
            </Col>
            <Col>
              <Text
                style={{textAlign: 'center', color: COLOR_BLUE, fontSize: 20}}>
                Blue
              </Text>
            </Col>
          </Row>
          <Row style={{paddingBottom: 20}}>
            <Col>
              <Text
                style={{
                  marginLeft: 15,
                  color: COLOR_BLUE,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Notifications
              </Text>
            </Col>
            <Col>
              <Text
                style={{textAlign: 'center', color: COLOR_BLUE, fontSize: 20}}>
                On
              </Text>
            </Col>
          </Row>
          <Row style={{paddingBottom: 10}}>
            <Col>
              <Text
                style={{
                  marginLeft: 15,
                  color: COLOR_BLUE,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Home page quote
              </Text>
            </Col>
          </Row>
          <Row style={{paddingBottom: 15}}>
            <Col>
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                // placeholder="edit text"
                placeholderTextColor="#2196F3"
                autoCapitalize="none"
                onChangeText={this.handleEmail}
              />
            </Col>
            <Col>
              <TouchableOpacity
                style={styles.btnDo}
                onPress={() => this._onPressButton()}>
                <Text style={styles.dateText2}>done</Text>
              </TouchableOpacity>
            </Col>
          </Row>
        </Grid>
        <Text
          style={{
            marginLeft: 20,
            color: COLOR_GREEN,
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          User Preferences and Behaviors
        </Text>
        <Grid style={{marginHorizontal: 20, marginVertical: 15}}>
          <Row style={{paddingBottom: 20}}>
            <Col>
              <Text
                style={{
                  marginLeft: 15,
                  color: COLOR_BLUE,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Normal Sleep Duration
              </Text>
            </Col>
            <Col>
              <Text
                style={{textAlign: 'center', color: COLOR_BLUE, fontSize: 20}}>
                7hrs
              </Text>
            </Col>
          </Row>
          <Row style={{paddingBottom: 15}}>
            <Col>
              <Text
                style={{
                  marginLeft: 15,
                  color: COLOR_BLUE,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Most Active time of the day
              </Text>
            </Col>
            <Col>
              <Text
                style={{textAlign: 'center', color: COLOR_BLUE, fontSize: 20}}>
                7pm - 12am
              </Text>
            </Col>
          </Row>
        </Grid>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 10,
            color: COLOR_RED,
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          Delete Acount
        </Text>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    marginLeft: 15,
    paddingLeft: 4,
    height: 35,
    borderColor: '#2196F3',
    borderRadius: 10,
    borderWidth: 1,
  },

  btnDo: {
    marginLeft: 15,
    backgroundColor: '#ccf2fb',
    height: 30,
    width: 100,
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
  dateText2: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#3eafc2',
  },
});

export default SettingsScreen;
