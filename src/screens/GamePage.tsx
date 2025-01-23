import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

const GamePage: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Game Page</Text>
      <View style={styles.card}>
        <Text style={styles.infoText}>Date: 2025-01-20</Text>
        <Text style={styles.infoText}>Time: 3:00 PM</Text>
        <Text style={styles.infoText}>Players: Alice, Bob</Text>
        <Text style={styles.infoText}>Weather: Sunny</Text>
        <Button
          title="Go to Chat"
          onPress={() => navigation.navigate('chat')}
          color="#1c87c9"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
  },
  card: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
});

export default GamePage;
