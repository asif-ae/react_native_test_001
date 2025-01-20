import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

interface Message {
  id: string;
  text: string;
  timestamp: string;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([{ id: '1', text: 'Welcome!', timestamp: '3:00 PM' }]);
  const [input, setInput] = useState<string>('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: `${messages.length + 1}`, text: input, timestamp: 'Now' }]);
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text>{item.text}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Type a message"
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  message: { marginVertical: 5 },
  timestamp: { fontSize: 12, color: 'gray' },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
});

export default ChatPage;
