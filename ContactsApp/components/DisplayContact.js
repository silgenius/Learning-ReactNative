import React, { useMemo } from 'react';
import { SectionList, View, StyleSheet, Text } from 'react-native';

import Row from './ContactRow';

export default function DisplayContactScreen({ contacts, navigation }) {
  const section = useMemo(() => {
    const data = contacts.reduce((acc, curr) => {
      const key = curr.firstName[0].toUpperCase();
      acc[key] = [ ...acc[key] || [] , curr ]
      return acc;
    }, {})
    return Object.keys(data).sort().map(key => ({
      title: key, data: data[key]
    }))
  }, [contacts])

  const renderItem = ({ item }) => {
    console.log(item)
    return <Row navigation={() => navigation.navigate('ContactDetails', {
      contact: { ...item }
    })} { ...item } />;
  }

  const renderSectionHeader = ({ title }) => {
    return (
      <View style={styles.sectionHeader}>
        <Text> {title} </Text>
      </View>
    )
  }
  
  return (
    <SectionList
      sections={section}
      renderSectionHeader={({ section }) => renderSectionHeader(section)}
      renderItem={ obj => renderItem(obj) }
      keyExtractor={(_, idx) => idx}
      stickySectionHeadersEnabled
    />
  )
}

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})