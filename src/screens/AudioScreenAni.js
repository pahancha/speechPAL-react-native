import React, { useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import BigAudioButton from '../components/BigAudioButton';

const RecordingScreen = () => {
  const [isRecording, setIsRecording] = useState(false);

  const handlePress = () => {
    setIsRecording((prevIsRecording) => !prevIsRecording);
  };

  const soundWaveScale = new Animated.Value(1);
  const soundWaveOpacity = new Animated.Value(1);

  const startSoundWaveAnimation = () => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(soundWaveScale, {
          toValue: 3,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(soundWaveOpacity, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const stopSoundWaveAnimation = () => {
    Animated.timing(soundWaveScale).stop();
    soundWaveScale.setValue(1);
    Animated.timing(soundWaveOpacity).stop();
    soundWaveOpacity.setValue(1);
  };

  const soundWaveStyle = {
    transform: [{ scale: soundWaveScale }],
    opacity: soundWaveOpacity,
  };

  return (
    <View style={styles.container}>
      <BigAudioButton onPress={handlePress} isRecording={isRecording} />
      {isRecording && (
        <Animated.View style={[styles.soundWave, soundWaveStyle]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  soundWave: {
    position: 'absolute',
    bottom: '30%',
    width: '100%',
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default RecordingScreen;
