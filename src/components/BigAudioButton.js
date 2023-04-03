import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const BigAudioButton = ({ onPress }) => {
  const [isRecording, setIsRecording] = useState(false);

  const handlePress = () => {
    setIsRecording((prevIsRecording) => !prevIsRecording);
    onPress();
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.title}>
        {isRecording ? 'Press to stop recording' : 'Press to talk'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderRadius: 100,
    width: 250,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign:'center'
  },
});

export default BigAudioButton;
