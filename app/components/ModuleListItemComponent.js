import React from 'react';
import { StyleSheet } from 'react-native';
import { Body, Card, CardItem, Text } from 'native-base';

import { COLOR_BLUE } from '../config/Constants';

const ModuleListItemComponent = ({ item }) => {

    return (
        <Card style={{ width: '100%' }}>
            <CardItem>
                <Body>
                    <Text style={styles.titleText}>
                        {item?.content ?? '-'}
                    </Text>
                </Body>
            </CardItem>
        </Card>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 18,
        color: COLOR_BLUE
    }
});

export default ModuleListItemComponent;