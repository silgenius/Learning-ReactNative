import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Button } from '@react-navigation/elements'

import ContactListScreen from './screens/ContactListScreen';
import ContactFormScreen from './screens/ContactFormScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';
import SettingScreen from './screens/SettingScreen';

const HomeStack = createNativeStackNavigator({
  initialRouteName: 'Contacts',
  screenOptions:{
    headerStyle: {
      backgroundColor: '#1f1f1f'
    },
    headerTintColor: '#fff',
  },
  screens: {
    Contacts: {
      screen: ContactListScreen,
      options: ({ navigation }) => ({
        title: 'All Contacts',
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('NewContact')} style={styles.button}>
          <Text style={styles.buttonText}>
            {"+"}
          </Text>
        </TouchableOpacity>
        ),
      }),
    },
    NewContact: {
      screen: ContactFormScreen,
      options:{
        title: 'Add New Contact'
      }
    },
    ContactDetails: {
      screen: ContactDetailsScreen,
      options: ({ route }) => ({
        title: `${route.params.contact.firstName} ${route.params.contact.lastName}`
      })
    }
  }
})

const RootTab = createBottomTabNavigator({
  screens: {
    Home: {
      screen: HomeStack,
      options: {
        headerShown: false
      }
    },
    Setting: {
      screen: SettingScreen,
      options: {
        title: 'Settings',
        headerStyle: {
          backgroundColor: '#1f1f1f',
        },
        headerTintColor: '#fff',
      }
    }
  }
})

const Navigator = createStaticNavigation(RootTab);

export default function App (){
  return <Navigator />
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1f1f1f',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    borderColor: '#333',
    borderWidth: 1,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
})