/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

export default function FileDetailsCard({file}) {
  const navigation = useNavigation();

  const {file_no, arrival_date, departure_date, client_name, department, id} =
    file;

  const handlePaymentPress = () => {
    navigation.navigate('Payment', {
      fileName: file_no,
      paymentDate: arrival_date,
      transactionId: 'TXN123456',
      amount: '5400 EGP',
      bank: '1234567890 - CIB',
    });
  };

  return (
    <View style={styles.card}>
      {/* <TouchableOpacity style={styles.closeButton}>
        <Icon name="times-circle" size={20} color="gray" />
      </TouchableOpacity> */}

      <View style={styles.row}>
        <Icon name="folder" size={18} color="#F4C542" />
        <Text style={styles.label}>File No:</Text>
        <Text style={styles.value}>{file_no}</Text>
        <TouchableOpacity
          onPress={handlePaymentPress}
          style={styles.paymentIcon}>
          <Icon name="money-bill-alt" size={24} color="#328E6E" />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Icon name="map-marker-alt" size={18} color="#FF4F4F" />
        <Text style={styles.label}>Arrival:</Text>
        <Text style={styles.value}>{arrival_date}</Text>

        <View style={{width: 30}} />

        <Icon name="calendar-alt" size={18} color="#FF8C42" />
        <Text style={styles.label}>Departure:</Text>
        <Text style={styles.value}>{departure_date}</Text>
      </View>

      <View style={styles.row}>
        <Icon name="user" size={18} color="#76C893" />
        <Text style={styles.label}>Guest:</Text>
        <Text style={styles.value}>{client_name}</Text>

        <View style={{width: 22}} />

        <Icon name="building" size={18} color="#307BA1" />
        <Text style={styles.label}>Dept:</Text>
        <Text style={styles.value}>{department}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 3,
    // margin: 5,
    // paddingBottom: 0,
    marginHorizontal: '1%',
    marginVertical: '2%',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  label: {
    fontWeight: 'bold',
    marginLeft: 8,
    fontSize: 12,
  },
  value: {
    marginLeft: 5,
    color: '#555',
    fontSize: 12,
  },
  paymentIcon: {
    marginLeft: '25%',
  },
});
