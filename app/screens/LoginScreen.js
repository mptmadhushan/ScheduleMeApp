/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {
  Button,
  Input,
  Text,
  Item,
  Form,
  Label,
  Content,
  Toast,
} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

import {COLOR_BLUE} from '../config/Constants';
import {IP_ADDRESS} from '../config/Constants';
import {setIsLoggedIn} from '../data/actions/AuthAction';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student_id: '',
      password: '',
      is_login: false,
    };

    this.onForgotPassword = this.onForgotPassword.bind(this);
    this.onLogIn = this.onLogIn.bind(this);
  }

  onForgotPassword() {
    Toast.show({text: 'Forgot Password Text!', duration: 3000});
  }

  async onLogIn() {
    console.log('log');
    // fetch('http://192.168.8.100:5000/notification', {
      fetch('http://'+IP_ADDRESS+'/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        student_id: this.state.student_id,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.is_login = responseJson.is_login;
        this.props.setIsLoggedIn(this.is_login);
        if (!this.is_login) {
          Toast.show({text: 'Student ID or Password Invalid', duration: 3000});
          console.log(this.is_login);
        }
      })
      .catch((error) => {
        this.props.setIsLoggedIn(this.is_login);
        console.log('ERRO',error);
      });

    // return fetch('http://192.168.8.103:5000/notification')
    //   .then((response) => response.json())
    //   .then((responseJson)=>{

    //     this.setState({
    //       test: responseJson.responseJson.name,
    //     })
    //     console.log('responseJson')
    //     console.log(responseJson.name)
    //   })
    // .catch((error)=>{
    //   console.log(error)
    // });

    // Toast.show({ text: this.state.student_id, duration: 3000 });
    // Toast.show({ text: this.state.password, duration: 3000 });
    // this.props.setIsLoggedIn(false);
  }

  render() {
    return (
      <ScrollView>
        <Content style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require('../../assets/logo.png')}
            resizeMode="cover"
          />

          <Form style={{marginRight: 15}}>
            <Item stackedLabel>
              <Label style={{fontWeight: 'bold', color: COLOR_BLUE}}>
                Student Number
              </Label>
              <Input
                name="student_id"
                style={{height: 0}}
                onChangeText={(text) => this.setState({student_id: text})}
              />
            </Item>

            <Item stackedLabel style={{marginTop: 15}}>
              <Label style={{fontWeight: 'bold', color: COLOR_BLUE}}>
                Password
              </Label>
              <Input
                name="password"
                style={{height: 0}}
                secureTextEntry
                onChangeText={(text) => this.setState({password: text})}
              />
            </Item>

            <Text
              style={{alignSelf: 'flex-end', marginTop: 10, color: COLOR_BLUE}}
              onPress={() => this.onForgotPassword()}>
              Forgot Password?
            </Text>
          </Form>

          <Button
            style={styles.loginBtn}
            rounded
            onPress={() => this.onLogIn()}>
            <Text uppercase={false} style={{fontSize: 18}}>
              Log in
            </Text>
          </Button>

          <Button
            style={styles.signupBtn}
            bordered
            rounded
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text uppercase={false} style={{fontSize: 18, color: COLOR_BLUE}}>
              Sign up
            </Text>
          </Button>
        </Content>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  logoImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  loginBtn: {
    marginTop: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 200,
    backgroundColor: COLOR_BLUE,
  },
  signupBtn: {
    marginTop: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 200,
    borderColor: COLOR_BLUE,
  },
});

let mapStateToProps = (state) => ({});

let mapDispatchToProps = {
  setIsLoggedIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
