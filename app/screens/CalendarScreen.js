import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Content, Icon, List, ListItem} from 'native-base';

import {COLOR_BLUE} from '../config/Constants';
import CalendarListItemComponent from '../components/CalendarListItemComponent';

class CalendarScreen extends Component {
  data = [
    {
      id: 1,
      date: 'Dec 14',
      day: 'Today',
      tasks: [
        {
          id: 1,
          description: 'CC Lecture, 8:00 - 10:00',
        },
        {
          id: 2,
          description: 'KM Viva, 12:00 - 14:00',
        },
      ],
    },
    {
      id: 2,
      date: 'Dec 15',
      day: 'Tomorrow',
      tasks: [
        {
          id: 1,
          description: 'Meeting 2, 10:00 - 11:00',
        },
        {
          id: 2,
          description: 'DS Lab, 14:00 - 16:00',
        },
      ],
    },
    {
      id: 3,
      date: 'Dec 16',
      day: 'Wednesday',
      tasks: [
        {
          id: 1,
          description: 'Presentation, 13:00 - 13:30',
        },
        {
          id: 2,
          description: 'Quiz 2, 17:00 - 18:00',
        },
      ],
    },
    {
      id: 4,
      date: 'Dec 17',
      day: 'Thursday',
      tasks: [
        {
          id: 1,
          description: 'IOT Mid Exam, 13:00 - 14:00',
        },
        {
          id: 2,
          description: 'Assignment 3, 17:00',
        },
      ],
    },
    {
      id: 5,
      date: 'Dec 18',
      day: 'Friday',
      tasks: [
        {
          id: 1,
          description: 'CC Lecture, 8:00 - 10:00',
        },
      ],
    },
  ];

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerLeft: () => (
        <Icon
          style={{marginLeft: 15, fontSize: 25, color: COLOR_BLUE}}
          type="MaterialIcons"
          name="menu"
          onPress={() => this.props.navigation.openDrawer()}
        />
      ),
      headerRight: () => (
        <Icon
          style={{marginRight: 15, color: COLOR_BLUE}}
          type="Octicons"
          name="plus"
          size={20}
          onPress={() => this.props.navigation.navigate('NewTask')}
        />
      ),
    });
  }

  render() {
    return (
      <Content>
        <List scrollEnabled={true}>
          {this.data.map((element) => (
            <ListItem key={element.id}>
              <CalendarListItemComponent item={element} />
            </ListItem>
          ))}
        </List>
      </Content>
    );
  }
}

const styles = StyleSheet.create({});

export default CalendarScreen;
