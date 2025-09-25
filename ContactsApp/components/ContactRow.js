import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

const Row = (props) => (
  <TouchableOpacity
    style={styles.row}
    onPress={() => props.navigation()}
  >
    <Text style={[styles.name, styles.contact]}>
      {`${props.firstName} ${props.lastName || "" }`}
    </Text>
    <Text style={styles.contact}>
      {`${props.phoneNumber}`}
    </Text>
  </TouchableOpacity >
)

const styles = StyleSheet.create({
  row: {
    marginBottom: 10
  },
  contact: {
    marginTop: 5,
    marginLeft: 50,
    fontSize: 15,
  },
  name: {
    fontWeight: 'bold',
  },
});



export default Row;