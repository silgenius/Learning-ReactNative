import React from 'react';
import { StyleSheet, Text, View,  Button } from 'react-native';

import contacts, { compareContacts } from './contacts';
import DisplayContact from './components/DisplayContact';
import CreateContact from './components/ContactForm';

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: contacts.sort(compareContacts),
    showContactForm: false,
  }

  toggleContactVisibility = () => {
    this.setState(prevState => ({
      ...prevState, showContacts: !prevState.showContacts
    }))
  }

  addContact = (contacts) =>  {
    this.setState(prevState => ({
      ...prevState, contacts: [...prevState.contacts, contacts], showContactForm: !prevState.showContactForm
    }))
  }

  toggleContactForm = () => {
    this.setState(prevState => ({
      showContactForm: !prevState.showContactForm
    }))
  }

  render() {
    if (this.state.showContactForm) return <CreateContact onSubmit={this.addContact}/>
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}> Contacts </Text>
        <View style={styles.buttonView}>
          <View style={{ marginLeft: 30, marginBottom: 10 }}>
            <Button
              style={styles.visibilityButton}
              title={this.state.showContacts ? 'Hide Contacts' : 'Show Contacts'}
              onPress={this.toggleContactVisibility}
            />
          </View>
          <View style={{ marginLeft: 30, marginBottom: 10 }}>
            <Button
              title="Add Contact"
              onPress={this.toggleContactForm}
            />
          </View>
        </View>
        {
          this.state.showContacts && <DisplayContact contacts={this.state.contacts} />
        }
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