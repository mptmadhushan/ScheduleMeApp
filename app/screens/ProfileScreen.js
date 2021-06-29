import React, { Component } from 'react';
import {
  Image,
  StyleSheet
} from 'react-native';
import { Text, Content, Grid, Col, Row } from 'native-base';

import { COLOR_BLUE } from '../config/Constants';

class ProfileScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      student_id : '',
      email: '',
    }
  }

  render() {
    return (
      <Content>
        <Grid style={{ padding: 20 }}>
          <Row>
            <Col style={{ alignItems: 'center' }}>
              <Image source={require('../../assets/avatar.png')} style={{ width: 100, height: 100 }} />
              <Text style={{ color: COLOR_BLUE }}>Edit image</Text>
            </Col>
            <Col style={{ alignSelf: 'center' }}>
              <Text style={{ fontSize: 20, color: COLOR_BLUE, fontWeight: 'bold' }}>Liyanage A.N.</Text>
              <Text style={{ fontSize: 18, color: COLOR_BLUE, fontWeight: 'bold' }}>ITxxxxxxxx</Text>
            </Col>
          </Row>
          <Row style={{ backgroundColor: '#e6f2ff', marginTop: 25, borderRadius: 5, padding: 15 }}>
            <Col>
              <Text style={{ fontSize: 24, color: COLOR_BLUE, fontWeight: 'bold' }}>User Details</Text>
              <Text style={{ fontSize: 20, color: COLOR_BLUE }}>SLIIT Email : ITXXX@my.sliit.lk</Text>
              <Text style={{ fontSize: 20, color: COLOR_BLUE }}>Year : 4th Year</Text>
              <Text style={{ fontSize: 20, color: COLOR_BLUE }}>Semester : 1st Semester</Text>
            </Col>
          </Row>
        </Grid>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
});

export default ProfileScreen;
