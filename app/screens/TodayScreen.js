import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';
import { Content, Icon, List, ListItem, Text } from 'native-base';
import moment from 'moment';

import { COLOR_BLUE } from '../config/Constants';
import { IP_ADDRESS } from '../config/Constants';
import ScheduleListItemComponent from '../components/ScheduleListItemComponent';

class TodayScreen extends Component {



    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.props.navigation.setOptions({
            headerLeft: () => (
                <Icon style={{ marginLeft: 15, fontSize: 25, color: COLOR_BLUE }} type='MaterialIcons' name='menu'
                    onPress={() => this.props.navigation.openDrawer()} />
            ),
            headerRight: () => (
                <Icon style={{ marginRight: 15, color: COLOR_BLUE }} type='Octicons'
                    name='plus' size={20} onPress={() => this.props.navigation.navigate('NewTask')} />
            )
        });

        return fetch('http://'+IP_ADDRESS+'/today_schedule')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ data: responseJson })
                console.log('didmount')
                console.log(this.state.data)
                this.render()
            })
            .catch((error) => {
                console.log(error)
            });


    }

    render() {
        return (
            <Content>
                <Text style={{ fontWeight: 'bold', fontSize: 35, marginLeft: 20, marginTop: 15, color: COLOR_BLUE }}>
                    {moment(new Date()).format('ddd, Do MMM')}
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 35, marginLeft: 20, color: COLOR_BLUE }}>
                    {moment(new Date()).format('YYYY')}
                </Text>
                <List scrollEnabled={true} >
                    {this.state.data.map((element) => (
                        <ListItem key={element.id}>
                            <ScheduleListItemComponent item={element} />
                        </ListItem>
                    ))}
                </List>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
});

export default TodayScreen;
