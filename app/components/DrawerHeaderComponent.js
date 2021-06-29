import React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Col, Content, Grid, Icon, Text } from 'native-base';

import { COLOR_BLUE } from '../config/Constants';

const DrawerHeaderComponent = ({ loggedUser }) => {

    return (
        <Content style={{ padding: 15 }}>
            <Grid>
                <Col style={{ alignSelf: 'center' }}>
                    <Icon type='AntDesign' name='close' style={{ color: COLOR_BLUE }} />
                </Col>
                <Col size={3} style={{ alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLOR_BLUE }}>{loggedUser?.username ?? 'Liyanage A.N.'}</Text>
                    <Text style={{ paddingVertical: 10, color: COLOR_BLUE }}>{loggedUser?.email ?? 'ITxxxxxxxx'}</Text>
                </Col>
            </Grid>
        </Content>
    );
};

const styles = StyleSheet.create({
});

mapStateToProps = (state) => ({
    loggedUser: state.auth.loggedUser
});

mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerHeaderComponent);