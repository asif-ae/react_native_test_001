import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../assets/icons/vector-1.svg';

// Get the screen width
const { width: screenWidth } = Dimensions.get('window');

// Constants for dynamic width and height
const horizontalPadding = 20; // Horizontal padding
const containerWidth = screenWidth - horizontalPadding * 2; // Dynamic container width
const aspectRatio = 350 / 179; // Aspect ratio (width / height)
const containerHeight = containerWidth / aspectRatio; // Dynamic container height

const NewsCardWithBackground = () => {
  return (
    <View style={[styles.container, { width: containerWidth, height: containerHeight }]}>
      <ImageBackground
        source={require('../../assets/images/golf-girl-big.jpeg')} // Replace with your background image
        style={styles.background}
        imageStyle={styles.imageStyle}
      >
        {/* Gradient Overlay */}
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)']}
          style={styles.gradientOverlay}
        />

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Logo width={50} height={20} /> {/* Adjust size as needed */}
        </View>

        {/* Text Content */}
        <Text style={styles.title}>
          Lorem Ipsum is a nickname for such a completely meaningless text - some
        </Text>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.author}>Lorem Ipsum is</Text>
          <View style={styles.dot} />
          <Icon name="clock-outline" size={12} color="#FFFFFF" />
          <Text style={styles.readTime}>4 minutes of reading</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    alignSelf: 'center',
    marginVertical: 16,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
  },
  imageStyle: {
    borderRadius: 12,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 12,
  },
  logoContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Rubik',
    color: '#FFFFFF',
    marginBottom: 8,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  author: {
    fontSize: 14,
    fontFamily: 'Rubik',
    color: '#FFFFFF',
  },
  dot: {
    width: 2,
    height: 2,
    backgroundColor: '#FCFAFA',
    borderRadius: 1,
  },
  readTime: {
    fontSize: 12,
    fontFamily: 'Rubik',
    color: '#FFFFFF',
  },
});

export default NewsCardWithBackground;
