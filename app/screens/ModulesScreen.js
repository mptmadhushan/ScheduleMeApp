/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Content, Icon, List, ListItem} from 'native-base';

import {COLOR_BLUE} from '../config/Constants';
import {IP_ADDRESS} from '../config/Constants';
import ModuleListItemComponent from '../components/ModuleListItemComponent';

class ModulesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
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

    return fetch('http://' + IP_ADDRESS + '/module')
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
    return (
      <Content>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 15,
            color: COLOR_BLUE,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Regular Modules
        </Text>
        <List scrollEnabled={true}>
          {this.state.data
            .filter((item) => !item.isRepeat)
            .map((element) => (
              <ListItem key={element.id}>
                <ModuleListItemComponent item={element} />
              </ListItem>
            ))}
        </List>
        <Text
          style={{
            marginLeft: 20,
            color: COLOR_BLUE,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Repeat Modules
        </Text>
        <List scrollEnabled={true}>
          {this.state.data
            .filter((item) => item.isRepeat)
            .map((element) => (
              <ListItem key={element.id}>
                <ModuleListItemComponent item={element} />
              </ListItem>
            ))}
        </List>
      </Content>
    );
  }
}

const styles = StyleSheet.create({});

export default ModulesScreen;
