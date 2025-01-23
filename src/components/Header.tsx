import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/profile-circle.jpg')}
          style={styles.image}
        />
      </View>

      {/* Name and Description */}
      <View style={styles.textContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Noam Penn</Text>
          <Text style={styles.nickname}>(Panther)</Text>
        </View>
        <Text style={styles.description}>a tennis player</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 85,
    backgroundColor: '#1F1B1B',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22.5,
    borderWidth: 0.8,
    borderColor: '#4774AD',
  },
  image: {
    width: 40.71,
    height: 40.71,
    borderRadius: 20.35,
  },
  textContainer: {
    marginLeft: 12,
    flexDirection: 'column',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Rubik',
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  nickname: {
    marginLeft: 5,
    color: '#AAAAAA',
    fontSize: 14,
    fontWeight: '400',
  },
  description: {
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    color: '#B0AAAA',
    marginTop: 4,
  },
});

export default Header;
