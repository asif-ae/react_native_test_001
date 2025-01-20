import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

interface NewsItem {
  id: string;
  title: string;
  comments: number;
  image: string;
}

const newsItems: NewsItem[] = [
  { id: '1', title: 'Breaking News', comments: 10, image: 'https://via.placeholder.com/150' },
  { id: '2', title: 'Sports Update', comments: 5, image: 'https://via.placeholder.com/150' },
];

const NewsPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={newsItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text>Comments: {item.comments}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  card: { marginBottom: 20, padding: 10, borderWidth: 1, borderRadius: 10 },
  image: { width: '100%', height: 150 },
  title: { fontSize: 18, marginVertical: 5 },
});

export default NewsPage;
