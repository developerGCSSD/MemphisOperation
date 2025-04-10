import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import InputField from '../components/inputField';
import LoginButton from '../components/loginButton';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //   const handleLogin = () => {
  //     // No validation needed for now
  //     console.log('Username:', username);
  //     console.log('Password:', password);
  //   };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Memphis Operation</Text>
      <InputField
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <InputField
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <LoginButton
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#307BA1',
    marginBottom: 40,
  },
});

export default LoginScreen;
