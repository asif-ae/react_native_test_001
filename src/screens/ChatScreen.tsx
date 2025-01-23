import React from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Chat/Header';
// import ChatBubble from "../components/Chat/ChatBubble";
import ChatBubble from '../components/Chat/ChatBubble';
import { MessageProps } from '../types/chat.type';

const ChatScreen = () => {
  const messages: MessageProps[] = [
    {
      id: 1,
      avatar: 'https://via.placeholder.com/40', // Replace with the correct avatar URL
      name: 'Penn N. (panther)',
      message: 'Hey guys, thanks a lot for the impressive game, it was fun!',
      time: '20:00',
    },
    {
      id: 2,
      avatar: 'https://via.placeholder.com/40', // Replace with the correct avatar URL
      name: 'You',
      message:
        "Certainly, it was fantastic to see how long each point lasted. It's always fun to play with players",
      time: '20:00',
    },
    {
      id: 3,
      avatar: 'https://via.placeholder.com/40', // Replace with the correct avatar URL
      name: 'Penn N. (panther)',
      message: 'The dedication of the ball was stunning.',
      time: '20:00',
    },
    {
      id: 4,
      avatar: 'https://via.placeholder.com/40', // Replace with the correct avatar URL
      name: 'Penn N. (panther)',
      message: "I'm crossing my fingers that the next game will be crazy!",
      time: '20:00',
      isHighlighted: true,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Header />

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ChatBubble
            avatar={item.avatar}
            name={item.name}
            message={item.message}
            time={item.time}
          />
        )}
      />

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Add a comment..." />
        <TouchableOpacity style={styles.sendButton}>
          <Icon name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFAF7',
  },
  header: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  headerAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
    borderWidth: 2,
    borderColor: '#28A745',
  },
  list: {
    padding: 10,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  highlighted: {
    backgroundColor: '#CCE5FF',
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  message: {
    color: '#1C120D',
    marginBottom: 5,
  },
  time: {
    fontSize: 12,
    color: '#888',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatScreen;
