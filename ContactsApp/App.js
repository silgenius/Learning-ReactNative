import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';

import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import contacts from './utils/contacts';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Contacts',
  screens: {
    Contacts: {
      screen: ContactList,
      options: {
        title: 'All Contacts'
      },
      initialParams: { newContacts: contacts }
    },
    NewContact: {
      screen: ContactForm,
      options:{
        title: 'Add New Contact'
      }
    },
  }
})

const Navigator = createStaticNavigation(RootStack);

export default function App (){
  return <Navigator />
}