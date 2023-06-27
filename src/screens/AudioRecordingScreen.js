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
      <Text style={styles.largeTitle}>Press below button {'\n'} to speak.</Text>

        <Text style={styles.smallTitle}>Press button again to stop recording</Text>

        <BigAudioButton title={isRecording ? 'STOP' : 'START'} onPress={handlePress} />

        <View style={styles.speech_text_area}>
            <Text style={styles.speech_text}>The speech of the aphasic person will go here.</Text>
        </View>
        


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
    textAlign: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    // marginVertical: 50,
  },
  smallTitle: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: '800'
  },
  speech_text: {
    fontSize: 16,
    fontWeight: '300'
  },
  speech_text_area : {
    padding: 25
  }
});

export default AudioRecordingScreen;
