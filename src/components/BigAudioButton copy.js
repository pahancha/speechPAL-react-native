// import React, { useState } from 'react';
// import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';

// const BigAudioButton = ({ onPress }) => {
//   const [isRecording, setIsRecording] = useState(false);

//   const handlePress = () => {
//     setIsRecording((prevIsRecording) => !prevIsRecording);
//     onPress();
//   };

//   const screenWidth = Dimensions.get('window').width;
//   const screenHeight = Dimensions.get('window').height;
//   const buttonWidth= screenWidth * 0.8;
//   const buttonHeight= screenHeight * 0.5;
//   const buttonColor = isRecording ? '#404040' : '#000000';
// //   const buttonColor = isRecording ? '#115931' : '#000000';


//   return (
//     <TouchableOpacity style={[styles.button, { width: buttonWidth, height: buttonHeight, backgroundColor: buttonColor }]} onPress={handlePress}>
//       <Text style={styles.title}>
//         {isRecording ? 'Press to stop recording' : 'Press to talk'}
//       </Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     borderRadius: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//     padding: 50,
//     textAlign: 'center'
//   },
// });

// export default BigAudioButton;
