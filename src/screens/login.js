import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../redux/reducers/auth';
import InputField from '../components/inputField';
import LoginButton from '../components/loginButton';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Track password visibility
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.auth);

  const handleLogin = () => {
    dispatch(loginUser({username, password}))
      .unwrap()
      .then(() => {
        navigation.navigate('Home');
      })
      .catch(err => {
        Alert.alert('Login Failed', err?.detail || 'Please try again.');
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the password visibility
  };

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
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
        showPasswordIcon={true} // Enable show password icon
        onTogglePasswordVisibility={togglePasswordVisibility} // Handle icon toggle
      />
      <LoginButton
        onPress={handleLogin}
        loading={loading} // if your button supports showing loading
      />
      {error && (
        <Text style={styles.errorText}>{error?.detail || 'Login error'}</Text>
      )}
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
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default LoginScreen;
