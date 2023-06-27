import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import BigAudioButton from '../components/BigAudioButton';
import SelectClassButtons from '../components/SelectClassButtons';
import TranscribedText from '../components/TranscribedText';

const AudioRecordingScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [selectedContext, setSelectedContext] = useState('general:');

  const handlePress = () => {
    setIsRecording((prevIsRecording) => !prevIsRecording);
  };

  return (
    <View>
    
        <Text style={styles.largeTitle}>Press below button {'\n'} to speak.</Text>

        <SelectClassButtons selectedContext={selectedContext} setSelectedContext={setSelectedContext} />


        <View style={styles.centerContent}>
            <Text style={styles.smallTitle}>Press button again to stop recording</Text>
            <BigAudioButton title={isRecording ? 'STOP' : 'START'} onPress={handlePress} selectedContext={selectedContext} />
        </View>
        
        <View style={styles.speech_text_area}>
          <TranscribedText />
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
    padding: 10,
  },
  largeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    // paddingLeft: 15,
    // paddingRight: 15,
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
    padding: 10
  },
  centerContent: {
    alignItems: 'center',
  },

});

export default AudioRecordingScreen;
