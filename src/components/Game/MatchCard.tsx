import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Calender from '../../assets/icons/calender.svg';
import Clock from '../../assets/icons/clock.svg';
import Message from '../../assets/icons/message.svg';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation.type';

const MatchCard = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Yarkon Park, Tel Aviv | Court #2</Text>
            <View style={styles.headerIcons}>
              <View style={styles.iconGroup}>
                <Calender width={15} height={15} style={styles.icon} />
                <Text style={styles.subtext}>02/24/2023</Text>
              </View>
              <View style={styles.iconGroup}>
                <Clock width={15} height={15} style={styles.icon} />
                <Text style={styles.subtext}>14:00</Text>
              </View>
              <View style={styles.iconGroup}>
                <Message width={15} height={15} style={styles.icon} />
                <Text style={styles.subtext}>26 messages</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <Icon name="share-variant" size={20} color="#145E94" />
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Player Section */}
        <View style={styles.players}>
          {/* Team 1 */}
          <View style={styles.team}>
            <View style={styles.player}>
              <View style={styles.avatarContainer}>
                <Image
                  source={require('../../assets/images/Ellipse-13.jpg')}
                  style={styles.avatar}
                />
                <Image
                  source={require('../../assets/images/twemoji_flag-brazil.png')}
                  style={styles.flag}
                />
              </View>
              <Text style={styles.playerName}>Mandler T.</Text>
              <Text style={styles.playerRole}>(PRO)</Text>
            </View>
            <View style={styles.player}>
              <View style={styles.avatarContainer}>
                <Image
                  source={require('../../assets/images/Ellipse-14.jpg')}
                  style={styles.avatar}
                />
                <Image
                  source={require('../../assets/images/twemoji_flag-brazil.png')}
                  style={styles.flag}
                />
              </View>
              <Text style={styles.playerName}>Oz Y.</Text>
              <Text style={styles.playerRole}>(The Wiz)</Text>
            </View>
          </View>

          {/* VS */}
          <Text style={styles.vs}>vs.</Text>

          {/* Team 2 */}
          <View style={styles.team}>
            {/* Placeholder for Player 1 */}
            <View style={styles.player}>
              <View style={styles.placeholderContainer}>
                <Icon name="plus" size={24} color="#145E94" />
              </View>
              <Text style={styles.playerName}>player</Text>
              <Text style={styles.playerRole}>(nickname)</Text>
            </View>

            {/* Placeholder for Player 2 */}
            <View style={styles.player}>
              <View style={styles.placeholderContainer}>
                <Icon name="plus" size={24} color="#145E94" />
              </View>
              <Text style={styles.playerName}>player</Text>
              <Text style={styles.playerRole}>(nickname)</Text>
            </View>
          </View>
        </View>

        {/* Divider */}
        {/* <View style={styles.divider} /> */}

        <View style={styles.footerContainer}>
          {/* Weather Information */}
          <View style={styles.weatherInfo}>
            <View style={styles.infoItem}>
              <Icon name="water-outline" size={20} color="#145E94" />
              <Text style={styles.infoText}>25% Precipitation</Text>
            </View>
            <View style={styles.infoItem}>
              <Icon name="cloud-outline" size={20} color="#145E94" />
              <Text style={styles.infoText}>Weather - cloudy</Text>
            </View>
          </View>

          {/* Chat Button */}
          <LinearGradient
            colors={['#34506D', '#3498DB']}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}}
            style={styles.chatButtonGradient}>
            <TouchableOpacity
              style={styles.chatButton}
              onPress={() => navigation.navigate('Chat')}>
              <Text style={styles.chatButtonText}>Chat</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1.2,
    borderColor: '#EEEEEE',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: '#210C0C',
  },
  headerIcons: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 8,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  subtext: {
    fontSize: 14,
    color: '#B0AAAA',
  },
  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 10,
    marginHorizontal: -15,
  },
  players: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  team: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
  },
  player: {
    alignItems: 'center',
    marginBottom: 10,
  },
  placeholderContainer: {
    width: 57,
    height: 57,
    borderRadius: 28.5,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#145E94',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 53,
    height: 53,
    borderRadius: 26.5,
    borderWidth: 1,
    borderColor: '#145E94',
  },
  flag: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
  },
  captain: {
    width: 12,
    height: 12,
  },
  playerNameContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  playerName: {
    fontSize: 14,
    color: '#210C0C',
  },
  playerRole: {
    fontSize: 12,
    color: '#B0AAAA',
  },
  vs: {
    fontSize: 21,
    fontFamily: 'Rubik',
    fontWeight: '400',
    color: '#145E94',
  },
  scores: {
    alignItems: 'center',
  },
  mainScore: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  setScore: {
    fontSize: 14,
    color: '#000',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
    height: 52,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginHorizontal: -15,
    marginBottom: -15,
  },
  weatherInfo: {
    flexDirection: 'column',
    marginLeft: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    fontFamily: 'Rubik',
    color: '#B0AAAA',
    marginLeft: 8,
  },
  chatButtonGradient: {
    width: 130,
    height: 52,
    borderBottomRightRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Ensure border radius applies to the gradient
  },
  chatButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatButtonText: {
    fontSize: 16,
    fontFamily: 'Rubik',
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

export default MatchCard;
