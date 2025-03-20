import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import FileDetailsCard from '../components/fileDetailsCard';

export default function AssignmentDetails({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <FileDetailsCard />
        <FileDetailsCard />
        <FileDetailsCard />
        <FileDetailsCard />
        <FileDetailsCard />
        <FileDetailsCard />
      </ScrollView>

      {/* Button Wrapper for Proper Spacing */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Assignment')}>
          <Text style={styles.buttonText}>Check Availability</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  scrollContainer: {
    paddingBottom: 20, // Prevent last item from being cut off
  },
  button: {
    backgroundColor: '#5CB9E9',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    margin: '5%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
