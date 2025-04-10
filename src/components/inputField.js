import React from 'react';
import {TextInput, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing icon

const InputField = ({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  showPasswordIcon,
  onTogglePasswordVisibility,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#888"
      />
      {showPasswordIcon && (
        <TouchableOpacity
          onPress={onTogglePasswordVisibility}
          style={styles.iconContainer}>
          <Icon
            name={secureTextEntry ? 'visibility' : 'visibility-off'}
            size={24}
            color="#307BA1"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#5CB9E9',
    borderRadius: 10,
    padding: 12,
    marginVertical: 10,
    width: '100%',
    color: '#000',
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
});

export default InputField;
