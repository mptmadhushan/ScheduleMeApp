import React from 'react';
import { Body, Card, CardItem, Row, Text } from 'native-base';
import { StyleSheet } from 'react-native';

import { COLOR_BLUE } from '../config/Constants';

const CompletedDeadlineListItemComponent = ({ item }) => {

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
                            Completed : {item?.completed_on ?? '-'}
                        </Text>
                    </Row>
                    <Row>
                        <Text style={styles.contentText}>
                            Submitted before deadline?  {item?.is_valid ? 'Yes' : 'No'}
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

export default CompletedDeadlineListItemComponent;