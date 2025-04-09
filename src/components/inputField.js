import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const InputField = ({placeholder, secureTextEntry, value, onChangeText}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#888"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#5CB9E9',
    borderRadius: 10,
    padding: 12,
    marginVertical: 10,
    width: '100%',
    color: '#000',
  },
});

export default InputField;
