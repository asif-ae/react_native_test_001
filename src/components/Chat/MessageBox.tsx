import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MessageBox = ({
  updateMessageList,
}: {
  updateMessageList: (newMessage: string) => void;
}) => {
  const [message, setMessage] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.addIcon}>
        <Icon name="add" size={24} color="#145E94" />
      </View>
      {/* Add a comment section */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a comment..."
          placeholderTextColor="#B0AAAA"
          multiline={true}
          value={message}
          onChangeText={text => setMessage(text)}
        />
      </View>

      {/* Send button */}
      <TouchableOpacity
        style={styles.sendButton}
        onPress={() => {
          updateMessageList(message);
          setMessage('');
        }}>
        <Icon name="send" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    elevation: 1, // Add shadow on Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    marginRight: 10,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#210C0C',
    maxHeight: 100,
  },
  addIcon: {
    width: 40,
    height: 40,
    // backgroundColor: '#145E94',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButton: {
    width: 40,
    height: 40,
    backgroundColor: '#145E94',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MessageBox;
