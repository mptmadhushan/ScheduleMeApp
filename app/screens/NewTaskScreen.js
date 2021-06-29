import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';
import { Content, Icon, Row, Col, Grid, Item, Label, Input } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';

import { COLOR_BLUE } from '../config/Constants';
import { IP_ADDRESS } from '../config/Constants';

class NewTaskScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showDate: false,
            showStartOn: false,
            showFinishOn: false,
            user_id: '',
            name: ''
        };
    }

    componentDidMount() {
        this.props.navigation.setOptions({
            headerLeft: () => (
                <Icon style={{ marginLeft: 15, fontSize: 25, color: COLOR_BLUE }} type='MaterialIcons' name='menu'
                    onPress={() => this.props.navigation.openDrawer()} />
            ),
            headerRight: () => (
                <Icon style={{ marginRight: 15, color: COLOR_BLUE }} type='AntDesign'
                    name='check' size={20} />
            )
        });
    }

    saveTask() {
        fetch('http://' + IP_ADDRESS + '/signin', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                student_id: this.state.student_id,
                password: this.state.password
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                Toast.show({ text: responseJson.status, duration: 3000 });
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <Content>
                <Grid style={{ padding: 20 }}>
                    <Row style={{ alignItems: 'center' }}>
                        <Col>
                            <Icon style={{ fontSize: 25, color: COLOR_BLUE }} type='MaterialIcons'
                                name='create' />
                        </Col>
                        <Col size={6}>
                            <Item fixedLabel>
                                <Label style={{ color: COLOR_BLUE }}>Username</Label>
                                <Input />
                            </Item>
                        </Col>
                    </Row>
                    <Row style={{ alignItems: 'center', marginTop: 15 }}>
                        <Col>
                            <Icon style={{ fontSize: 25, color: COLOR_BLUE }} type='Entypo'
                                name='calendar' />
                        </Col>
                        <Col size={6}>
                            <Item fixedLabel onPress={() => this.setState({ showDate: !this.state.showDate })}>
                                <Label style={{ color: COLOR_BLUE }}>Date</Label>
                                <Input editable={false} />
                            </Item>
                            {this.state.showDate && (
                                <DateTimePicker
                                    testID='datePicker'
                                    value={new Date()}
                                    mode='date'
                                    display='default'
                                    onChange={() => this.setState({ showDate: false })}
                                />
                            )}
                        </Col>
                    </Row>
                    <Row style={{ alignItems: 'center', marginTop: 15 }}>
                        <Col>
                            <Icon style={{ fontSize: 25, color: COLOR_BLUE }} type='MaterialIcons'
                                name='access-time' />
                        </Col>
                        <Col size={6}>
                            <Item fixedLabel onPress={() => this.setState({ showStartOn: !this.state.showStartOn })}>
                                <Label style={{ color: COLOR_BLUE }}>Start On</Label>
                                <Input editable={false} />
                            </Item>
                            {this.state.showStartOn && (
                                <DateTimePicker
                                    testID='startOnPicker'
                                    value={new Date()}
                                    mode='time'
                                    is24Hour={true}
                                    display='default'
                                    onChange={() => this.setState({ showStartOn: false })}
                                />
                            )}
                        </Col>
                    </Row>
                    <Row style={{ alignItems: 'center', marginTop: 15 }}>
                        <Col>
                            <Icon style={{ fontSize: 25, color: COLOR_BLUE }} type='MaterialIcons'
                                name='access-time' />
                        </Col>
                        <Col size={6}>
                            <Item fixedLabel onPress={() => this.setState({ showFinishOn: !this.state.showFinishOn })}>
                                <Label style={{ color: COLOR_BLUE }}>Finish On</Label>
                                <Input editable={false} />
                            </Item>
                            {this.state.showFinishOn && (
                                <DateTimePicker
                                    testID='finishOnPicker'
                                    value={new Date()}
                                    mode='time'
                                    is24Hour={true}
                                    display='default'
                                    onChange={() => this.setState({ showFinishOn: false })}
                                />
                            )}
                        </Col>
                    </Row>
                    <Row style={{ alignItems: 'center', marginVertical: 15 }}>
                        <Col>
                            <Icon style={{ fontSize: 25, color: COLOR_BLUE }} type='FontAwesome'
                                name='refresh' />
                        </Col>
                        <Col size={6}>
                            <Item fixedLabel>
                                <Label style={{ color: COLOR_BLUE }}>Repeat</Label>
                                <Input />
                            </Item>
                        </Col>
                    </Row>
                </Grid>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
});

export default NewTaskScreen;
