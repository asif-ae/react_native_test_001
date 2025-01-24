import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Settings from '../../assets/icons/settings.svg';

const Filter = () => {
  return (
    <View style={styles.container}>
      {/* Filter Icon */}
      <View style={styles.filterIconContainer}>
        <Settings width={20} color="#145E94" />
      </View>

      {/* Dropdown Input */}
      <TouchableOpacity style={styles.dropdown}>
        <Text style={styles.dropdownText}>Date | hour...</Text>
        <Icon name="chevron-down" size={16} color="#145E94" style={styles.dropdownIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: 45,
    paddingHorizontal: 20,
    backgroundColor: '#F5F6F8',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  filterIconContainer: {
    width: 31,
    height: 31,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#F5F6F8',
    borderRadius: 5,
    marginRight: 16,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 182,
    height: 31,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 48,
    backgroundColor: '#FFFFFF',
  },
  dropdownText: {
    fontFamily: 'Rubik',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
  },
  dropdownIcon: {
    marginLeft: 8,
  },
});

export default Filter;
