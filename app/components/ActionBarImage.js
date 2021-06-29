import React from 'react';
import { Image, View } from 'react-native';

const ActionBarImage = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Image
                source={require('../../assets/logo.png')}
                style={{
                    width: 80,
                    height: 60,
                    marginRight: 15,
                }}
            />
        </View>
    );
};

export default ActionBarImage;