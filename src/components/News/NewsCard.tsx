import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MessageIcon from '../../assets/icons/message.svg';

const NewsCard = () => {
  return (
    <View style={styles.container}>
      {/* Left Section */}
      <View style={styles.leftSection}>
        <Text style={styles.category}>News</Text>
        <Text style={styles.title}>
          Lorem Ipsum is a term for a completely meaningless text - sometimes read
        </Text>
        <View style={styles.footer}>
          <View style={styles.timeContainer}>
            <Icon name="clock-outline" size={14} color="#145E94" />
            <Text style={styles.timeText}>an hour ago</Text>
          </View>
          <View style={styles.commentsContainer}>
            <MessageIcon width={12} height={12} color="#145E94" />
            <Text style={styles.commentsText}>26 comments</Text>
          </View>
        </View>
      </View>

      {/* Right Section - Image */}
      <Image
        source={require('../../assets/images/golf-thumb.png')} // Replace with your image
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 22,
    alignItems: 'center',
    width: '100%',
    height: 91,
  },
  leftSection: {
    flex: 1,
    paddingRight: 8,
  },
  category: {
    fontSize: 14,
    fontFamily: 'Rubik',
    color: '#145E94',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Rubik',
    color: '#000000',
    lineHeight: 19,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  timeText: {
    fontSize: 14,
    fontFamily: 'Rubik',
    color: '#B0AAAA',
    marginLeft: 4,
  },
  commentsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentsText: {
    fontSize: 14,
    fontFamily: 'Rubik',
    color: '#B0AAAA',
    marginLeft: 4,
  },
  image: {
    width: '30.56%',
    height: 84,
    borderRadius: 12,
    backgroundColor: '#D9D9D9',
  },
});

export default NewsCard;
