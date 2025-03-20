import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CustomRadioButton from '../components/customRadioButton';

export default function Assignment() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isGuideStep, setIsGuideStep] = useState(false); // Track step

  // Options for each step
  const leaderOptions = [
    'Ali Mohamed',
    'Mohamed Ahmed',
    'Yara Gamal',
    'Hassan Mohamed',
    'John Doe',
    'Nour Saleh',
    'Mai Ahmed',
    'Khaled Elnabawy',
    'Ramez Galal',
    'Tamer Ashor',
  ];

  const guideOptions = [
    'Tamer Hosny',
    'Angham',
    'Billie Eilish',
    'Hamaki',
    'Carol Smaha',
    'Carmen Seliman',
  ];

  const handleNext = () => {
    if (!isGuideStep) {
      // Move to Guide selection
      setIsGuideStep(true);
      setSelectedOption(null); // Reset selection for Guide
    } else {
      // Handle Submit Logic Here
      console.log('Submitted:', selectedOption);
    }
  };

  const handleBack = () => {
    setIsGuideStep(false); // Go back to Leader selection
    setSelectedOption(null); // Reset selection for Leader
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{isGuideStep ? 'Guide' : 'Leader'}</Text>

      <CustomRadioButton
        options={isGuideStep ? guideOptions : leaderOptions} // Switch options based on step
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      <View style={styles.buttonContainer}>
        {isGuideStep && ( // Show Back button only in Guide step
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.button, !selectedOption && styles.disabledButton]}
          disabled={!selectedOption}
          onPress={handleNext}>
          <Text style={styles.buttonText}>
            {isGuideStep ? 'Submit' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: '5%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#5CB9E9', // Blue color for buttons
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    margin: '5%',
  },
  backButton: {
    backgroundColor: '#5CB9E9', // Set the same blue color
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    margin: '5%',
  },
  disabledButton: {
    backgroundColor: '#ccc', // Grey when disabled
    margin: '5%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
