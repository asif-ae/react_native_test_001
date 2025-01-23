import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SystemMessageCard = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>System message</Text>
        <TouchableOpacity>
          <Icon name="share-variant" size={20} color="#145E94" />
        </TouchableOpacity>
      </View>

      {/* Message Section */}
      <Text style={styles.message}>
        Lorem Ipsum is a term for a completely common meaningless text - sometimes also called Lorem Ipsum!
      </Text>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Icon name="clock-outline" size={16} color="#145E94" style={styles.icon} />
        <Text style={styles.footerText}>an hour ago</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#EEEEEE',
    borderWidth: 1.2,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // For shadow on Android
    marginVertical: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerText: {
    fontFamily: 'Rubik',
    fontSize: 14,
    color: '#145E94',
    fontWeight: 'bold',
  },
  message: {
    fontFamily: 'Rubik',
    fontSize: 16,
    color: '#000000',
    lineHeight: 24,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  footerText: {
    fontFamily: 'Rubik',
    fontSize: 14,
    color: '#B0AAAA',
  },
});

export default SystemMessageCard;
