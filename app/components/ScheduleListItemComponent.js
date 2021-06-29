import React from 'react';
import { StyleSheet } from 'react-native';
import { Body, Card, CardItem, Col, Grid, Icon, Text } from 'native-base';

import { COLOR_BLUE, COLOR_GREEN } from '../config/Constants';

const ScheduleListItemComponent = ({ item }) => {

    return (
        <Card style={{ width: '100%' }}>
            <CardItem>
                <Body>
                    <Grid>
                        <Col size={6}>
                            <Text style={styles.titleText}>
                                {item?.time ?? '-'}
                            </Text>
                            <Text style={styles.contentText}>
                                {item?.content ?? '-'}
                            </Text>
                        </Col>
                        <Col style={{ justifyContent: 'center' }}>
                            {item.selected && <Icon type='AntDesign' name='checkcircle' style={{ color: COLOR_GREEN }} />}
                        </Col>
                    </Grid>
                </Body>
            </CardItem>
        </Card>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLOR_BLUE
    },
    contentText: {
        fontSize: 22,
        color: COLOR_BLUE
    }
});

export default ScheduleListItemComponent;