import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Adjust icon library as needed
import LinearGradient from 'react-native-linear-gradient';

const MatchCard = () => {
  return (
    <View style={styles.container}>
      {/* Location and Date */}
      <View style={styles.header}>
        <Text style={styles.location}>Yarkon Park, Tel Aviv | Court #2</Text>
        <View style={styles.dateRow}>
          <Icon name="calendar" size={16} color="#555" />
          <Text style={styles.date}>02/24/2023</Text>
          <Icon name="clock" size={16} color="#555" />
          <Text style={styles.date}>14:00</Text>
          <Icon name="message" size={16} color="#555" />
          <Text style={styles.messages}>26 messages</Text>
        </View>
      </View>

      {/* Players Section */}
      <View style={styles.players}>
        {/* Player 1 */}
        <View style={styles.player}>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }}
            style={styles.avatar}
          />
          <Text style={styles.playerName}>Mandler T.</Text>
          <Text style={styles.playerRole}>(PRO)</Text>
        </View>

        <Text style={styles.vs}>vs.</Text>

        {/* Player 2 */}
        <View style={styles.player}>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }}
            style={styles.avatar}
          />
          <Text style={styles.playerName}>Oz Y.</Text>
          <Text style={styles.playerRole}>(The Wiz)</Text>
        </View>

        {/* Add Players */}
        <TouchableOpacity style={styles.addPlayer}>
          <Icon name="plus" size={32} color="#555" />
          <Text style={styles.addPlayerText}>player</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addPlayer}>
          <Icon name="plus" size={32} color="#555" />
          <Text style={styles.addPlayerText}>player</Text>
        </TouchableOpacity>
      </View>

      {/* Weather and Chat Button */}
      <View style={styles.footer}>
        <View style={styles.weather}>
          <Icon name="water-outline" size={20} color="#555" />
          <Text style={styles.weatherText}>25% Precipitation</Text>
          <Icon name="cloud-outline" size={20} color="#555" />
          <Text style={styles.weatherText}>Weather - cloudy</Text>
        </View>
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.chatButtonText}>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  header: {
    marginBottom: 16,
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  date: {
    fontSize: 14,
    color: '#555',
    marginHorizontal: 4,
  },
  messages: {
    fontSize: 14,
    color: '#555',
    marginLeft: 4,
  },
  players: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  player: {
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  playerName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
  },
  playerRole: {
    fontSize: 12,
    color: '#888',
  },
  vs: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  addPlayer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPlayerText: {
    fontSize: 12,
    color: '#888',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weather: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 4,
  },
  chatButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MatchCard;
