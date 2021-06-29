/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Text, Content, View, Icon, Row, List, ListItem} from 'native-base';
import moment from 'moment';

import {COLOR_BLUE} from '../config/Constants';
import {IP_ADDRESS} from '../config/Constants';
import NotificationListItemComponent from '../components/NotificationListItemComponent';
import SyncStorage from 'sync-storage';

class HomeScreen extends Component {
  constructor(props) {
    console.log('constractor');
    super(props);
    this.state = {
      data: [],
      homeText: '',
    };
  }

  async componentDidMount() {
    const data = await SyncStorage.init();
    console.log('AsyncStorage is ready!', data);
    const result = SyncStorage.get('homeText');
    this.setState({homeText: result});
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

  render() {
    console.log('render');
    return (
      <Content>
        <View>
          <Image
            source={require('../../assets/background1.jpg')}
            style={{height: 200, width: '100%'}}
            resizeMode={'cover'}
          />
          <Text
            style={{
              color: 'white',
              position: 'absolute',
              fontWeight: 'bold',
              fontSize: 35,
              right: 0,
              marginRight: 30,
              marginTop: 40,
            }}>
            {moment(new Date()).format('ddd, Do MMM')}
          </Text>
          <Text
            style={{
              color: 'white',
              position: 'absolute',
              fontWeight: 'bold',
              fontSize: 35,
              right: 0,
              marginRight: 30,
              marginTop: 80,
            }}>
            {moment(new Date()).format('YYYY')}
          </Text>
          <Text
            style={{
              color: 'white',
              position: 'absolute',
              fontSize: 20,
              right: 0,
              marginRight: 30,
              marginTop: 120,
            }}>
            {this.state.homeText}
          </Text>
        </View>
        <Row style={{marginHorizontal: 15, marginTop: 15}}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: COLOR_BLUE}}>
            Notifications
          </Text>
          <Icon
            style={{
              fontSize: 25,
              color: COLOR_BLUE,
              alignSelf: 'center',
              marginLeft: 10,
            }}
            type="Octicons"
            name="bell"
          />
          <Text
            style={{
              marginLeft: 'auto',
              fontWeight: 'bold',
              color: COLOR_BLUE,
              alignSelf: 'center',
            }}
            onPress={() => this.props.navigation.navigate('Notification')}>
            View all
          </Text>
        </Row>
        <List scrollEnabled={true}>
          {this.state.data.map((element) => (
            <ListItem key={element.id}>
              <NotificationListItemComponent item={element} />
            </ListItem>
          ))}
        </List>
      </Content>
    );
  }
}

const styles = StyleSheet.create({});

export default HomeScreen;
