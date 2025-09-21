import React from 'react';
import { FlatList,  SectionList, View, StyleSheet, Text } from 'react-native';

import Row from './ContactRow';

export default class DisplayContact extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.formatContactSections(this.props.contacts)
    this.section = Object.keys(this.data).sort().map(key => ({
      title: key, data: [ ...(this.data[key]) ]
    }))
  }

  formatContactSections (props) {
    const data = props.reduce((acc, curr) => {
      const key = curr.firstName[0].toUpperCase();
      acc[key] = [ ...acc[key] || [] , curr ];
      return acc
    }, {})
    return data
  }

  renderItem = ({ item }) => {
    return <Row { ...item } />;
  }

  renderSectionHeader = ({ title }) => {
    return (
      <View style={styles.sectionHeader}>
        <Text> {title} </Text>
      </View>
    )
  }
  
  render() {
    return (
      <SectionList
        sections={this.section}
        renderSectionHeader={({ section }) => this.renderSectionHeader(section)}
        renderItem={ obj => this.renderItem(obj) }
        keyExtractor={item => item.key}
        stickySectionHeadersEnabled={true}
      />
    )
  }
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