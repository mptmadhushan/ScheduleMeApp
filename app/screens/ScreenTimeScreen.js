import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet
} from 'react-native';
import { Text, Content, Icon, Grid, Row, Col } from 'native-base';
import { PieChart } from 'react-native-chart-kit';

import { COLOR_BLUE } from '../config/Constants';

class ScreenTimeScreen extends Component {

    data = [
        {
            platform: 'Facebook',
            name: 'F',
            time: 164,
            color: 'rgba(131, 167, 234, 1)',
            legendFontColor: '#000000',
            legendFontSize: 15
        },
        {
            platform: 'Youtube',
            name: 'Y',
            time: 130,
            color: '#F00',
            legendFontColor: '#000000',
            legendFontSize: 15
        },
        {
            platform: 'Instagram',
            name: 'I',
            time: 67,
            color: 'orange',
            legendFontColor: '#000000',
            legendFontSize: 15
        },
        {
            platform: 'Other',
            name: 'O',
            time: 30,
            color: '#ffffff',
            legendFontColor: '#000000',
            legendFontSize: 15
        }
    ];

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.navigation.setOptions({
            headerLeft: () => (
                <Icon style={{ marginLeft: 15, fontSize: 25, color: COLOR_BLUE }} type='MaterialIcons' name='menu'
                    onPress={() => this.props.navigation.openDrawer()} />
            )
        });
    }

    render() {
        return (
            <Content>
                <Text style={{ marginLeft: 20, marginTop: 15, color: COLOR_BLUE, fontSize: 30, fontWeight: 'bold' }}>6h 34m</Text>
                <Text style={{ marginLeft: 20, color: COLOR_BLUE, fontSize: 20, fontWeight: 'bold' }}>32 mins less than Yesterday</Text>
                <PieChart
                    data={this.data}
                    width={Dimensions.get('window').width}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#fb8c00',
                        backgroundGradientTo: '#ffa726',
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: '6',
                            strokeWidth: '2',
                            stroke: '#ffa726'
                        }
                    }}
                    accessor={'time'}
                    backgroundColor={'transparent'}
                    paddingLeft={'15'}
                    absolute
                />
                <Grid style={{ marginHorizontal: 20 }}>
                    <Row style={{ paddingBottom: 20 }}>
                        <Col>
                            <Row style={{ alignItems: 'center' }}>
                                <Icon type='AntDesign' name='facebook-square' />
                                <Text style={{ marginLeft: 15, color: COLOR_BLUE, fontSize: 18, fontWeight: 'bold' }}>Facebook</Text>
                            </Row>
                        </Col>
                        <Col><Text style={{ textAlign: 'center', color: COLOR_BLUE, fontWeight: 'bold' }}>2h 44m</Text></Col>
                    </Row>
                    <Row style={{ paddingBottom: 20 }}>
                        <Col>
                            <Row style={{ alignItems: 'center' }}>
                                <Icon type='AntDesign' name='youtube' />
                                <Text style={{ marginLeft: 15, color: COLOR_BLUE, fontSize: 18, fontWeight: 'bold' }}>Youtube</Text>
                            </Row>
                        </Col>
                        <Col><Text style={{ textAlign: 'center', color: COLOR_BLUE, fontWeight: 'bold' }}>2h 10m</Text></Col>
                    </Row>
                    <Row style={{ paddingBottom: 20 }}>
                        <Col>
                            <Row style={{ alignItems: 'center' }}>
                                <Icon type='AntDesign' name='instagram' />
                                <Text style={{ marginLeft: 15, color: COLOR_BLUE, fontSize: 18, fontWeight: 'bold' }}>Instagram</Text>
                            </Row>
                        </Col>
                        <Col><Text style={{ textAlign: 'center', color: COLOR_BLUE, fontWeight: 'bold' }}>1h 07m</Text></Col>
                    </Row>
                    <Row style={{ paddingBottom: 20 }}>
                        <Col>
                            <Row style={{ alignItems: 'center' }}>
                                <Icon type='AntDesign' name='clockcircleo' />
                                <Text style={{ marginLeft: 15, color: COLOR_BLUE, fontSize: 18, fontWeight: 'bold' }}>Set Screen Time Goal</Text>
                            </Row>
                        </Col>
                        <Col><Text style={{ textAlign: 'center', color: COLOR_BLUE, fontWeight: 'bold' }}>5h</Text></Col>
                    </Row>
                </Grid>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
});

export default ScreenTimeScreen;
