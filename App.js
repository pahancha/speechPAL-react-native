import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import BigAudioButton from './src/components/BigAudioButton';
import AudioRecordingScreen from './src/screens/AudioRecordingScreen';


export default function App() {
  return (
    <View style={styles.container}>
    <AudioRecordingScreen/>
    {/* <AudioScreenAni /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
