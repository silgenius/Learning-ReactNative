import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DisplayContact from '../components/DisplayContact';
import contacts from '../utils/contacts';

export default function ContactList({ route }) {
  const navigation = useNavigation();
  const [showContacts, setShowContacts] = useState(true);
  const [contactList, setContactList] = useState([...contacts]);

  useEffect(() => {
    if (route.params?.newContact) {
      addNewContact(route.params.newContact);
    }
  }, [route.params?.newContact]);

  const addNewContact = (newContact) => {
    setContactList(prevContacts => [...prevContacts, newContact]);
  };

  const toggleContactVisibility = () => {
    setShowContacts(prev => !prev);
  };

  const navigateToNewContact = () => {
    navigation.navigate('NewContact');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={toggleContactVisibility} style={styles.button}>
          <Text style={styles.buttonText}>
            {showContacts ? 'Hide Contacts' : 'Show Contacts'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToNewContact} style={styles.button}>
          <Text style={styles.buttonText}>Add Contact</Text>
        </TouchableOpacity>
      </View>

      {showContacts && (
        <View style={styles.contactsWrapper}>
          <DisplayContact contacts={contactList} navigation={navigation} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1f1f1f',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    borderColor: '#333',
    borderWidth: 1,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  contactsWrapper: {
    flex: 1,
  },
});
