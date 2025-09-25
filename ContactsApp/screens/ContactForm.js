import React, { useState, useEffect } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CreateContact() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const phoneIsValid = (value) => {
    return (+value >= 0) && (value[value.length - 1] !== '.') && value.length <= 11;
  };

  useEffect(() => {
    const isValid = phoneIsValid(phone) && phone.length === 11 && name.trim().length >= 3;
    setIsFormValid(isValid);
  }, [phone, name]);

  const handlePhoneChange = (value) => {
    if (phoneIsValid(value)) setPhone(value);
  };

  const toggleSubmit = () => {
    const [firstName = '', lastName = ''] = name.trim().split(' ', 2);
    navigation.popTo('Contacts', {
      newContact: { firstName, lastName, phoneNumber: phone }
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder='Name'
        placeholderTextColor="#aaa"
        style={styles.input}
      />
      <TextInput
        value={phone}
        onChangeText={handlePhoneChange}
        keyboardType="numeric"
        placeholder='Phone'
        placeholderTextColor="#aaa"
        style={styles.input}
      />
      <TouchableOpacity
        onPress={toggleSubmit}
        disabled={!isFormValid}
        style={[styles.button, isFormValid ? styles.buttonEnabled : styles.buttonDisabled]}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#ecf0f1',
    color: '#1f1f1f',
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  button: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonEnabled: {
    backgroundColor: '#1f1f1f',
  },
  buttonDisabled: {
    backgroundColor: '#444',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CreateContact;
