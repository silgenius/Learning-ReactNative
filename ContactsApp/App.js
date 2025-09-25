import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';

import ContactList from './screens/ContactList';
import ContactForm from './screens/ContactForm';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Contacts',
  screens: {
    Contacts: {
      screen: ContactList,
      options: {
        title: 'All Contacts'
      },
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