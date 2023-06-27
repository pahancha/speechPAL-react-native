import React, { useContext, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { TranscribedTextContext } from '../contexts/TranscribedTextContext';

const TranscribedText = () => {
  const { transcribedText, setTranscribedText } = useContext(TranscribedTextContext);

  useEffect(() => {
    console.log(transcribedText);
  }, [transcribedText]);

  const handleSentenceChange = (index, newValue) => {
    const newSentences = [...transcribedText];
    newSentences[index] = newValue.slice(0, 100);
    setTranscribedText(newSentences);
  };

  return (
    <View style={styles.textContainer}>
      {transcribedText.length > 0 ? (
        transcribedText.map((sentence, index) => (
          <View key={index} style={styles.listItem}>
            <TextInput
                style={styles.editable}
                value={sentence}
                onChangeText={(text) => handleSentenceChange(index, text)}
                maxLength={100}
                multiline
            />
          </View>
        ))
      ) : (
        <Text style={styles.transcribedText}>
          <Text style={{fontWeight: 'bold'}}>Transcribed speech will display here. </Text>
          You can edit them to communicate exactly what you intended.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  transcribedText: {
    fontSize: 18,
    color: '#444',
    textAlign: 'center',
    maxWidth: '80%',
  },
  listItem: {
    marginBottom: 10,
  },
  editable: {
    width: '50%',
    minHeight: 35,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  editable: {
    maxWidth: Dimensions.get('window').width * 0.9, // 90% of screen width
    minWidth: Dimensions.get('window').width * 0.9,
    minHeight: 35,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
  },
});

export default TranscribedText;
