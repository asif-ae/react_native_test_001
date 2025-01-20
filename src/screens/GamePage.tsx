import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Game'>;

const GamePage: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Page</Text>
      <View style={styles.card}>
        <Text>Date: 2025-01-20</Text>
        <Text>Time: 3:00 PM</Text>
        <Text>Players: Alice, Bob</Text>
        <Text>Weather: Sunny</Text>
        <Button title="Chat" onPress={() => navigation.navigate('Chat')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  card: { padding: 20, borderWidth: 1, borderRadius: 10, width: '80%' },
});

export default GamePage;
