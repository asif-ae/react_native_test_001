import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return (
    <View style={styles.header}>
      {/* Date and Location */}
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>
          Monday, February 23 | 14:00 - Tel Aviv
        </Text>
        <TouchableOpacity>
          <Icon name="chevron-right" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Icons and Avatars */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconWrapper}>
          <Icon name="share" size={20} color="#333" />
        </TouchableOpacity>
        <View style={styles.avatarsContainer}>
          {[1, 2, 3, 4].map(index => (
            <View key={index} style={styles.avatarWrapper}>
              <Image
                source={require(`../../assets/images/Ellipse-26.jpg`)}
                style={styles.avatar}
              />
              <View style={styles.onlineIndicator} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#003366',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  iconWrapper: {
    marginRight: 10,
  },
  avatarsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#28A745',
    borderWidth: 2,
    borderColor: '#fff',
  },
});

export default Header;
