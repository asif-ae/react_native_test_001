import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Divider from '../components/Divider';
import Header from '../components/Header';
import MatchDetailsCard from '../components/News/MatchDetailsCard';
import NewsCard from '../components/News/NewsCard';
import NewsCardWithBackground from '../components/News/NewsCardWithBackground';
import SystemMessageCard from '../components/News/SystemMessageCard';

const NewsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollViewContainer}>
        <NewsCardWithBackground />

        <Divider />

        <NewsCard />

        <Divider />

        <NewsCard />

        <Divider />

        <MatchDetailsCard />

        <Divider />

        <NewsCard />

        <Divider />

        <MatchDetailsCard />

        <Divider />

        <SystemMessageCard />

        <View style={styles.spacer} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FCFAFA'},
  scrollViewContainer: {flex: 1, backgroundColor: '#FCFAFA'},
  spacer: {paddingVertical: 20},
});

export default NewsScreen;
