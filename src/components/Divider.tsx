import React from 'react';
import {View, StyleSheet} from 'react-native';

const Divider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  divider: {
    width: '100%',
    height: 1,
    alignSelf: 'center',
    backgroundColor: '#EEEEEE',
  },
});

export default Divider;
