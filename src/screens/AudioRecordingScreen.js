import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BigAudioButton from '../components/BigAudioButton';

const AudioRecordingScreen = () => {
  const [isRecording, setIsRecording] = useState(false);

  const handlePress = () => {
    setIsRecording((prevIsRecording) => !prevIsRecording);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.largeTitle}>Press below button to talk</Text>
      {isRecording && (
        <Text style={styles.smallTitle}>Press button again to stop recording</Text>
      )}
      <BigAudioButton title={isRecording ? 'STOP' : 'START'} onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
   
  },
  largeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  smallTitle: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default AudioRecordingScreen;
