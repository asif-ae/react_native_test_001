import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Filter = () => {
  return (
    <View style={styles.container}>
      {/* Left Settings Icon */}
      <TouchableOpacity style={styles.iconContainer}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2099/2099058.png' }}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20, // Rounded edges for the container
    paddingHorizontal: 12,
    height: 40,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 1,
  },
  iconContainer: {
    marginRight: 8,
  },
  icon: {
    width: 16,
    height: 16,
    tintColor: '#4A90E2', // Blue tint for the settings icon
  },
  dropdownText: {
    fontSize: 14,
    color: '#1C120D',
    padding: 0,
    flex: 1,
  },
  dropdownIcon: {
    width: 14,
    height: 14,
    tintColor: '#4A90E2', // Blue tint for the dropdown arrow
    marginLeft: 8,
  },
});

export default Filter;
