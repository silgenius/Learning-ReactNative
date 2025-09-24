import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const Row = (props) => (
  <Card style={styles.row}>
    <Text style={[styles.name, styles.contact]}>
      {`${props.firstName} ${props.lastName || "" }`}
    </Text>
    <Text style={styles.contact}>
      {`${props.phoneNumber}`}
    </Text>
  </Card>
)

const styles = StyleSheet.create({
  row: {
    marginBottom: 10
  },
  contact: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 15,
  },
  name: {
    fontWeight: 'bold',
  },
});



export default Row;