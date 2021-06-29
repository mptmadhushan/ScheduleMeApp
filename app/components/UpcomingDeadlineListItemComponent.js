import React from 'react';
import { StyleSheet } from 'react-native';
import { Body, Card, CardItem, Row, Text } from 'native-base';

import { COLOR_BLUE } from '../config/Constants';

const UpcomingDeadlineListItemComponent = ({ item }) => {

    return (
        <Card style={{ width: '100%' }}>
            <CardItem>
                <Body>
                    <Row>
                        <Text style={styles.titleText}>
                            {item?.name ?? '-'}
                        </Text>
                    </Row>
                    <Row>
                        <Text style={styles.contentText}>
                            {item?.module ?? '-'}
                        </Text>
                    </Row>
                    <Row>
                        <Text style={styles.contentText}>
                            Deadline : {item?.deadline ?? '-'}
                        </Text>
                    </Row>
                    <Row style={{ alignSelf: 'flex-end' }}>
                        <Text style={styles.contentText}>
                            {item?.allocated_time ?? '-'}
                        </Text>
                    </Row>
                </Body>
            </CardItem>
        </Card>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 18,
        color: COLOR_BLUE
    },
    contentText: {
        fontSize: 15,
        color: COLOR_BLUE
    }
});

export default UpcomingDeadlineListItemComponent;