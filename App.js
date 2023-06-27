import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView,SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import BigAudioButton from './src/components/BigAudioButton';
import AudioRecordingScreen from './src/screens/AudioRecordingScreen';
import { TranscribedTextProvider } from './src/contexts/TranscribedTextContext';


export default function App() {
  return (
  <SafeAreaView style={styles.container}>
    <TranscribedTextProvider>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <AudioRecordingScreen/>
      </ScrollView>
    </TranscribedTextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});

