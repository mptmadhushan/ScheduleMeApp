/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';

import AuthStackNavigation from './AuthStackNavigation';
import MainDrawerNavigation from './MainDrawerNavigation';

class MainNavigation extends Component {
  constructor(props) {
    super(props);

    this.getContent = this.getContent.bind(this);
  }

  getContent() {
    if (this.props.isLoggedIn != null && this.props.isLoggedIn == true) {
      return <MainDrawerNavigation />;
    } else {
      return <AuthStackNavigation />;
    }
  }

  render() {
    return <NavigationContainer>{this.getContent()}</NavigationContainer>;
  }
}

mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigation);
