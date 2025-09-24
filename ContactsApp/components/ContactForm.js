import React, { useState, useEffect } from "react";
import { Text, Button, TextInput, View, StyleSheet } from 'react-native';

import { useNavigation} from '@react-navigation/native';

function CreateContact({ route }) {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('')
  const [isFormValid, validateForm] = useState(false);

  const phoneIsValid = (value) => (+value >= 0) && (value[value.length - 1] !=  '.') && value.length <= 11;

  useEffect(() => {
    if (phoneIsValid(phone) && phone !== "" && phone.length === 11 && name.length >= 3) validateForm(true);
    else validateForm(false)
  }, [phone, name])

  const handlePhoneChange = (value) => {
    if (phoneIsValid(value)) setPhone(value);
  }

  const toggleSubmit = () => {
    const [firstName, lastName] = name.split(' ', 2)
    const { contacts } = route.params
    navigation.navigate('Contacts', {
      newContacts: [...contacts, { firstName, lastName, phoneNumber: phone }]
    })
  }

  return (
    <View style={styles.container}>
        <TextInput
            value={name}
            onChangeText={setName}
            placeholder='Name'
            style={styles.input}
        />
        <TextInput
          value={phone}
          onChangeText={handlePhoneChange}
          placeholder='Phone'
          style={styles.input}
        />
        <Button
          title="Submit"
          disabled={!isFormValid}
          onPress={toggleSubmit}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    height: 50,
    width: 'auto',
    paddingLeft: 10,
    borderWidth: 1,
    margin: 5,
    borderRadius: 10
  }
})

export default CreateContact;