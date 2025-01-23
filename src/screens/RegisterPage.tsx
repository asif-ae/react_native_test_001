import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Divider from '../components/Divider';
import MatchCard from '../components/Game/MatchCard';
import Header from '../components/Header';
import MatchDetailsCard from '../components/News/MatchDetailsCard';
import NewsCard from '../components/News/NewsCard';
import NewsCardWithBackground from '../components/News/NewsCardWithBackground';
import SystemMessageCard from '../components/News/SystemMessageCard';

const RegisterPage: React.FC= () => {
  return (
    <ScrollView style={styles.container}>
      <Header />

      <SystemMessageCard />

      <Divider />

      <NewsCardWithBackground />

      {/* <MatchCard /> */}

      <MatchDetailsCard />

      <NewsCard />

      <View style={{paddingVertical: 20}}>
        <Divider />
      </View>

      <NewsCard />

      <View style={{paddingVertical: 20}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {fontSize: 24, marginBottom: 20},
  card: {padding: 20, borderWidth: 1, borderRadius: 10, width: '80%'},
});

export default RegisterPage;
