import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

function SelectClassButtons({ selectedContext, setSelectedContext }) {
  const [selectedButton, setSelectedButton] = useState(null);
  const buttons = ['need', 'inform', 'preference', 'question', 'general', 'all'];

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    setSelectedContext(buttonName+":");
  };

  return (
    <View style={styles.container}>
      {buttons.map((buttonName) => (
        <TouchableOpacity
          key={buttonName}
          style={[
            styles.button,
            selectedButton === buttonName ? styles.selectedButton : {},
            buttonName === 'all' ? styles.allButton : {}
          ]}
          onPress={() => handleButtonClick(buttonName)}
        >
          <Text style={[
            styles.buttonText,
            selectedButton === buttonName ? styles.selectedButtonText : {}
          ]}>
            {buttonName.charAt(0).toUpperCase() + buttonName.slice(1)}
          </Text>
          {selectedButton === buttonName && (
            <Text style={styles.selectedText}>Selected</Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F5F2F2',
    borderRadius: 8,
    width: Dimensions.get('window').width / 2.5,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#000',
  },
  selectedButton: {
    backgroundColor: '#000',
  },
  selectedButtonText: {
    color: '#fff',
  },
  allButton: {
    backgroundColor: '#f00',
  },
  selectedText: {
    fontSize: 12,
    color: '#fff',
    marginTop: 5,
  },
});

export default SelectClassButtons;
