import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ChatBubble = ({
  name,
  message,
  type,
  time,
  withAvatar = true,
}: {
  name: string;
  message: string;
  type: 'me' | 'sender';
  time: string;
  withAvatar: boolean;
}) => {
  return (
    <View
      style={[
        styles.container,
        type === 'me'
          ? {
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }
          : {
              flexDirection: 'row-reverse',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            },
      ]}>
      <LinearGradient
        colors={type === 'me' ? ['#34506D', '#3498DB'] : ['#FFFFFF', '#FFFFFF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.messageBox}>
        {name && (
          <Text
            style={[
              styles.senderName,
              {color: type === 'me' ? '#FFFFFF' : '#210C0C'},
            ]}>
            {name}
          </Text>
        )}
        <Text
          style={[
            styles.messageText,
            {color: type === 'me' ? '#FFFFFF' : '#210C0C'},
          ]}>
          {message}
        </Text>
        <Text
          style={[
            styles.timestamp,
            {color: type === 'me' ? '#FFFFFF' : '#B0AAAA'},
          ]}>
          {time}
        </Text>
      </LinearGradient>
      {withAvatar ? (
        <Image
          source={require(`../../assets/images/Ellipse-26.jpg`)}
          style={styles.avatar}
        />
      ) : (
        <View style={{width: 40, height: 40}} />
      )}
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 12,
  },
  messageBox: {
    maxWidth: width * 0.7,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 8,
    marginLeft: 8,
  },
  senderName: {
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  messageText: {
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 22,
  },
  timestamp: {
    fontFamily: 'Rubik',
    fontSize: 14,
    fontWeight: '300',
    color: '#CFD8DC',
    textAlign: 'right',
    marginTop: 4,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#D9D9D9',
  },
});

export default ChatBubble;
