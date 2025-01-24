import React from 'react';
import { View, StyleSheet } from 'react-native';

const TransformedVector = () => {
  return (
    <View style={styles.container}>
      <View style={styles.vector}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // To allow absolute positioning
  },
  vector: {
    position: 'absolute',
    left: 8,
    bottom: -12,
    width: 13.13, // Width in px
    height: 25.59, // Height in px
    backgroundColor: 'red',
    transform: [
      { scaleX: -0.58 }, // X-axis scaling
      { scaleY: 0.93 }, // Y-axis scaling
      { skewX: '40deg' }, // Skew along X-axis
      { skewY: '-25deg' }, // Skew along Y-axis
      { translateX: 10 }, // Adjust translation if needed
      { translateY: 3 }, // Adjust translation if needed
    ],
    opacity: 1, // Adjust the opacity
  },
});

export default TransformedVector;
