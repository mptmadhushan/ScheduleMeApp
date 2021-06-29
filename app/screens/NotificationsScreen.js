import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';
import { Content, Icon, List, ListItem } from 'native-base';

import { COLOR_BLUE } from '../config/Constants';
import { IP_ADDRESS } from '../config/Constants';
import NotificationListItemComponent from '../components/NotificationListItemComponent';

class NotificationScreen extends Component {



    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    async componentDidMount() {
        this.props.navigation.setOptions({
            headerLeft: () => (
                <Icon style={{ marginLeft: 15, fontSize: 25, color: COLOR_BLUE }} type='MaterialIcons' name='menu'
                    onPress={() => this.props.navigation.openDrawer()} />
            )
        });

        return fetch('http://'+IP_ADDRESS+'/notification')
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
                <List scrollEnabled={true} >
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

const styles = StyleSheet.create({
});

export default NotificationScreen;
