import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface ChatBubbleProps {
  avatar: string;
  name: string;
  message: string;
  time: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ avatar, name, message, time }) => {
  return (
    <View style={styles.bubbleContainer}>
      {/* Avatar */}
      <Image source={{ uri: avatar }} style={styles.avatar} />

      {/* Chat Bubble */}
      <View style={styles.messageContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bubbleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    maxWidth: '75%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  message: {
    fontSize: 14,
    color: '#1C120D',
    marginBottom: 5,
  },
  time: {
    fontSize: 12,
    color: '#888',
    alignSelf: 'flex-end',
  },
});

export default ChatBubble;
