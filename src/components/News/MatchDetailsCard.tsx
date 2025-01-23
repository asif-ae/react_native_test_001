import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Calender from '../../assets/icons/calender.svg';
import Clock from '../../assets/icons/clock.svg';
import Message from '../../assets/icons/message.svg';

const MatchDetailsCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Yarkon Park, Tel Aviv | Court #1</Text>
            <View style={styles.headerIcons}>
              <View style={styles.iconGroup}>
                <Calender width={15} height={15} style={styles.icon} />
                <Text style={styles.subtext}>02/24/2023</Text>
              </View>
              <View style={styles.iconGroup}>
                <Clock width={15} height={15} style={styles.icon} />
                <Text style={styles.subtext}>02:07</Text>
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

          {/* Scores */}
          <View style={styles.scores}>
            <Text style={styles.mainScore}>1 - 3</Text>
            <Text style={styles.setScore}>1 - 0</Text>
            <Text style={styles.setScore}>1 - 2</Text>
            <Text style={styles.setScore}>4 - 3</Text>
          </View>

          {/* Team 2 */}
          <View style={styles.team}>
            <View style={styles.player}>
              <View style={styles.avatarContainer}>
                <Image
                  source={require('../../assets/images/Ellipse-15.jpg')}
                  style={styles.avatar}
                />
                <Image
                  source={require('../../assets/images/twemoji_flag-brazil.png')}
                  style={styles.flag}
                />
              </View>
              <View style={styles.playerNameContainer}>
                <Image
                  source={require('../../assets/images/image-44.jpg')}
                  style={styles.captain}
                />
                <Text style={styles.playerName}>Goren S.</Text>
              </View>
              <Text style={styles.playerRole}>(hard)</Text>
            </View>
            <View style={styles.player}>
              <View style={styles.avatarContainer}>
                <Image
                  source={require('../../assets/images/Ellipse-16.jpg')}
                  style={styles.avatar}
                />
                <Image
                  source={require('../../assets/images/twemoji_flag-brazil.png')}
                  style={styles.flag}
                />
              </View>
              <Text style={styles.playerName}>Penn N.</Text>
              <Text style={styles.playerRole}>(panther)</Text>
            </View>
          </View>
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
});

export default MatchDetailsCard;
