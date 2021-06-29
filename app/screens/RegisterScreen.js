import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions
} from 'react-native';
import { Button, Input, Text, Item, Form, Label, Content, Toast } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

import WaveComponent from '../components/WaveComponent';
import { COLOR_WHITE, COLOR_BLUE } from '../config/Constants';
import { IP_ADDRESS } from '../config/Constants';

class RegisterScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            student_id: '',
            email: '',
            password: '',
            conform_password: '',
        }

        this.onSignUp = this.onSignUp.bind(this);
    }

    onSignUp() {
        fetch('http://'+IP_ADDRESS+'/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                student_id: this.state.student_id,
                email: this.state.email,
                password: this.state.password
            })
        });
        Toast.show({ text: 'Sign up Successfully!', duration: 3000 });
    }

    render() {
        return (
            <ScrollView>
                <Content>
                    <View>
                        <WaveComponent containerStyle={styles.svgCurve} />

                        <View style={{ margin: 40, marginBottom: 60 }}>
                            <Text style={{ fontSize: 24, color: COLOR_WHITE, marginBottom: 10 }}>
                                Welcome
                            </Text>

                            <Text style={{ fontSize: 36, color: COLOR_WHITE, fontWeight: 'bold' }}>
                                Sign up
                            </Text>
                        </View>
                    </View>

                    <Form style={{ marginRight: 35, marginLeft: 20 }}>
                        <Item stackedLabel>
                            <Label style={styles.fieldLabel}>Student Number</Label>
                            <Input name='Student Number' style={{ height: 0 }} onChangeText={(text) => this.setState({ student_id: text })} />
                        </Item>

                        <Item style={{ marginTop: 10 }} stackedLabel>
                            <Label style={styles.fieldLabel}>SLIIT Email</Label>
                            <Input name='email' style={{ height: 0 }} onChangeText={(text) => this.setState({ email: text })} />
                        </Item>

                        <Item style={{ marginTop: 10 }} stackedLabel>
                            <Label style={styles.fieldLabel}>Enter password</Label>
                            <Input name='password' style={{ height: 0 }} secureTextEntry onChangeText={(text) => this.setState({ password: text })} />
                        </Item>

                        <Item style={{ marginTop: 10 }} stackedLabel>
                            <Label style={styles.fieldLabel}>Confirm password</Label>
                            <Input name='confirmPassword' style={{ height: 0 }} secureTextEntry onChangeText={(text) => this.setState({ conform_password: text })} />
                        </Item>
                    </Form>

                    <Button style={styles.signupBtn} rounded onPress={() => this.onSignUp()}>
                        <Text uppercase={false} style={{ fontSize: 18 }}>Sign up</Text>
                    </Button>

                    <Text style={{ margin: 10, marginBottom: 20, color: COLOR_BLUE, textAlign: 'center' }}
                        onPress={() => this.props.navigation.navigate('Login')}>
                        Already Signed up? Log in
                    </Text>
                </Content>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    fieldLabel: {
        fontWeight: 'bold',
        color: COLOR_BLUE
    },
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width
    },
    signupBtn: {
        marginTop: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        width: 200,
        backgroundColor: COLOR_BLUE
    }
});

export default RegisterScreen;
