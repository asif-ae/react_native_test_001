import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Filter from '../components/Game/Filter';
import MatchCard from '../components/Game/MatchCard';
import Header from '../components/Header';

const GamePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Filter />
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Doubles games</Text>
          </TouchableOpacity>
        </View>

        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  buttonView: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  button: {
    width: 125,
    height: 34,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#145E94',
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Rubik',
    fontSize: 14,
    fontWeight: '400',
    color: '#145E94',
    textAlign: 'center',
  },
});

export default GamePage;
