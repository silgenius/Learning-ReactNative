import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function ContactDetailsScreen({ route }) {
  const { contact } = route.params;

  const getInitials = () => {
    const first = contact.firstName?.[0] || '';
    const last = contact.lastName?.[0] || '';
    return `${first}${last}`.toUpperCase();
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.initials}>{getInitials()}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>First Name</Text>
        <Text style={styles.value}>{contact.firstName}</Text>

        <Text style={styles.label}>Last Name</Text>
        <Text style={styles.value}>{contact.lastName}</Text>

        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>{contact.phoneNumber}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 24,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#1f1f1f',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#333',
  },
  initials: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  detailsContainer: {
    width: '100%',
    paddingHorizontal: 12,
  },
  label: {
    color: '#1f1f1f',
    fontSize: 14,
    marginTop: 16,
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  value: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});
