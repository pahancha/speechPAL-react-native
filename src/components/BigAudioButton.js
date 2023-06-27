import React, { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, StyleSheet, Text, Dimensions, Platform, View, ActivityIndicator } from 'react-native';
import { Audio } from 'expo-av';
import { TranscribedTextContext } from '../contexts/TranscribedTextContext';

const BigAudioButton = (props) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingInstance, setRecordingInstance] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // context api related
  const { setTranscribedText } = useContext(TranscribedTextContext);

  // Initialize and request permissions
  useEffect(() => {
    (async () => {
      if (Platform.OS === 'ios') {
        const { status } = await Audio.requestPermissionsAsync();
        if (status !== 'granted') {
          alert('Permission to access microphone is required to use this app.')
        }
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
    })();
  }, []);

  const handleStartRecording = async () => {
    console.log("Button pressed.")
    setIsRecording(true);
    const recording = new Audio.Recording();
    await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
    await recording.startAsync();
    setRecordingInstance(recording);
  };

  const handleStopRecording = async () => {
    setIsRecording(false);
    setIsLoading(true);
    await recordingInstance.stopAndUnloadAsync();

    const fileURI = recordingInstance.getURI();

    let formData = new FormData();
    formData.append('audio', {
      uri: fileURI,
      name: 'recording.wav',
      type: 'audio/wav'
    });
    formData.append('choice', props.selectedContext);

    console.log("About to make fetch request");


    fetch('http://127.0.0.1:5000/generate-with-choice', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      const generatedSentences = data.results.map(result => result.generatedSentence);
      console.log("Generated sentences:", generatedSentences);  // Log the generated sentences
      setTranscribedText(generatedSentences);
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error:', error);
      setIsLoading(false);
    });  
  };

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const buttonWidth= screenWidth * 0.9;
  const buttonHeight= screenHeight * 0.3;
  const buttonColor = isRecording ? (isLoading ? '#FF0000' : '#404040') : '#000000';

  const handlePress = () => {
    isRecording ? handleStopRecording() : handleStartRecording();
  };

  return (
    <View>
    
      <TouchableOpacity disabled={isLoading} style={[styles.button, { width: buttonWidth, height: buttonHeight, backgroundColor: buttonColor }]} onPress={handlePress}>
        <Text style={styles.title}>
          {isRecording ? 'Press to stop recording' : 'Press to talk'}
        </Text>
      </TouchableOpacity>
      {isLoading && (
        <View style={styles.loadingContainer}> 
          <ActivityIndicator size={'large'}></ActivityIndicator>
        </View>
      )}
    </View>  
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    padding: 50,
    textAlign: 'center'
  },
  loadingContainer:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default BigAudioButton;
