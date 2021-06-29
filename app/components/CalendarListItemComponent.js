import React from 'react';
import { StyleSheet } from 'react-native';
import { Body, Card, CardItem, List, ListItem, Row, Text, View } from 'native-base';

import { COLOR_BLUE } from '../config/Constants';

const CalendarListItemComponent = ({ item }) => {

    return (
        <View style={{ width: '100%' }}>
            <Row>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLOR_BLUE }}>{item?.date ?? '-'}   </Text>
                <Text style={{ alignSelf: 'center', color: COLOR_BLUE }}>{item?.day ?? '-'}</Text>
            </Row>

            <Card>
                <CardItem>
                    <Body>
                        <List>
                            {item?.tasks && item?.tasks.map((element) => (
                                <ListItem key={element.id}>
                                    <Text style={{ color: COLOR_BLUE }}>{element.description ?? '-'}</Text>
                                </ListItem>
                            ))}
                        </List>
                    </Body>
                </CardItem>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
});

export default CalendarListItemComponent;