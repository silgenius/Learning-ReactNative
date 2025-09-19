import React from 'react'
import { StyleSheet, Text, View, ScrollView, Button, Switch } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      secs: 0,
      isClicked: false,
    }
    this.intervalId = null
  }

  incrTimer = () => {
    this.setState(prevState => ({
      secs: prevState.secs + 1,
      }))

    this.state({
      isClicked: true,
    })
  }

  formatTime(totalSeconds) {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    const pad = num => num < 10 ? `0${num}` : num;

    return `${pad(hrs)} : ${pad(mins)} : ${pad(secs)}`;
  }

  startInterval = () => {
    this.intervalId = setInterval(this.incrTimer, 1000)
    this.setState({
      isClicked: true,
    })
  }

  resetInterval = () => {
    clearInterval(this.intervalId);
    this.setState({
      secs: 0,
      isClicked: false
    })
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <ScrollView>
        <Text style={styles.paragraph}>
          This is A POMODORO Timer
        </Text>
        <Button onPress={ this.state.isClicked ? this.resetInterval : this.startInterval } title={ this.state.isClicked ? "Reset": "Start" } />
        <Text style={styles.paragraph}> {this.formatTime(this.state.secs)}
        </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  todoContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
