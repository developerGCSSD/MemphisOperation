import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/reducers/auth';
import {useNavigation} from '@react-navigation/native';

const HeaderRightIcon = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={async () => {
        try {
          await dispatch(logout());
          navigation.navigate('Login');
        } catch (error) {
          console.log('Logout failed:', error);
        }
      }}
      style={{paddingHorizontal: 15}}>
      <Icon name="ban" size={20} color="white" />
    </TouchableOpacity>
  );
};

export default HeaderRightIcon;
