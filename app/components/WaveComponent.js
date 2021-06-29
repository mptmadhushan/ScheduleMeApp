import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { COLOR_BLUE } from '../config/Constants';

export default function WaveComponent({ containerStyle }) {

    return (
        <View style={containerStyle}>
            <View style={{ backgroundColor: COLOR_BLUE, height: 120 }}>
                <Svg height='60%'
                    width='100%'
                    viewBox='0 0 1440 180'
                    style={{ position: 'absolute', top: 100 }}>
                    <Path
                        fill={COLOR_BLUE}
                        d='M0,128L80,149.3C160,171,320,213,480,197.3C640,181,800,107,960,90.7C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
                    />
                </Svg>
            </View>
        </View>
    );
};