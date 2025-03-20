import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import HomeTabs from '../components/homeTabs';
import FileCard from '../components/fileCard';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      {/* HomeTabs Component */}
      <HomeTabs />

      {/* Scrollable File Cards */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
      </ScrollView>

      {/* Custom Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AssignmentDetails')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
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
    paddingBottom: 20, // Adds spacing to prevent cutoff at the bottom
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
