import React from 'react';
import { StyleSheet, Text, View,  Button, FlatList, } from 'react-native';

import contacts, { compareContacts } from './contacts';
import Row from './components/row'

export default class App extends React.Component {
  state = {
    showContacts: false,
  }

  updateContactVisibility = () => {
    this.setState(prevState => ({
      ...prevState, showContacts: !prevState.showContacts
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}> Contacts </Text>
        <View style={styles.buttonView}>
          <View style={{ marginLeft: 30, marginBottom: 10 }}>
            <Button
              style={styles.visibilityButton}
              title={this.state.showContacts ? 'Hide Contacts' : 'Show Contacts'}
              onPress={this.updateContactVisibility}
            />
          </View>
          <View style={{ marginLeft: 30, marginBottom: 10 }}>
            <Button
              title="Sort Contacts"
            />
          </View>
        </View>
        <FlatList
          data={this.state.showContacts && contacts}
          renderItem={({ item }) => <Row { ...item } /> }
          keyExtractor={item => item.key}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  visibilityButton: {
    marginBottom: 5,
    borderRadius: 10,
  },
  buttonView: {
    flexDirection: 'row',
  }
});
