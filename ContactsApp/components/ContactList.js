import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation} from '@react-navigation/native';

import DisplayContact from './DisplayContact';
import contacts from '../utils/contacts';

export default function ContactList ({ route }) {
  const navigation = useNavigation();
  const [showContacts, updateContactVisibility] = useState(true);
  const [contactList, updateContacts] = useState([...contacts]);

  useEffect(() => {
    if (route.params?.newContact) {
      const newContact = route.params.newContact;
      createNewContact(newContact);
    }
  }, [route.params?.newContact])
  
  const createNewContact = (newContact) => {
    updateContacts(prevState => [ ...prevState, newContact])
  }

  const toggleContactVisibility = () => {
    updateContactVisibility(prevState => !prevState)
  }

  const toggleContactForm = () => {
    navigation.navigate('NewContact')
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonView}>
        <View style={{ marginLeft: 30, marginBottom: 10 }}>
          <Button 
            onPress={toggleContactVisibility}
            style={styles.Button}
          >
            {showContacts ? 'Hide Contacts' : 'Show Contacts'}
          </Button>
        </View>
        <View style={{ marginLeft: 30, marginBottom: 10 }}>
          <Button
            onPress={toggleContactForm}
            style={styles.Button}
          >
            Add Contacts
          </Button>
        </View>
      </View>
      {
        showContacts && <DisplayContact contacts={contactList} />
      }
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  Button: {
    marginBottom: 5,
    borderRadius: 10,
  },
  buttonView: {
    flexDirection: 'row',
  }
});