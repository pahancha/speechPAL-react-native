import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';

const BigAudioButton = ({ onPress }) => {
  const [isRecording, setIsRecording] = useState(false);

  const handlePress = () => {
    setIsRecording((prevIsRecording) => !prevIsRecording);
    onPress();
  };

  const screenWidth = Dimensions.get('window').width;
  const buttonSize = screenWidth * 0.8;

  return (
    <TouchableOpacity style={[styles.button, { width: buttonSize, height: buttonSize }]} onPress={handlePress}>
      <Text style={styles.title}>
        {isRecording ? 'Press to stop recording' : 'Press to talk'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default BigAudioButton;
