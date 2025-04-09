import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native'; // ✅ Hook import

export default function FileDetailsCard({onClose}) {
  const navigation = useNavigation(); // ✅ Hook usage

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Icon name="times-circle" size={20} color="gray" />
      </TouchableOpacity>

      <View style={styles.row}>
        <Icon name="folder" size={18} color="#F4C542" />
        <Text style={styles.label}> Files:</Text>
        <Text style={styles.value}>10222/2/2025</Text>
      </View>

      <View style={styles.row}>
        <Icon name="map-marker-alt" size={18} color="#FF4F4F" />
        <Text style={styles.label}> Activity:</Text>
        <Text style={styles.value}>Day Tour in Fayoum</Text>
      </View>

      <View style={styles.row}>
        <Icon name="user" size={18} color="#76C893" />
        <Text style={styles.label}> Guest Name:</Text>
        <Text style={styles.value}>Mohamed Ahmed</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('Payment', {
              fileName: '10222/2/2025',
              paymentDate: '2025-03-25',
              transactionId: 'TXN123456',
              amount: '5400 EGP',
              bank: '1234567890 - CIB',
            })
          }>
          <Text style={styles.buttonText}>Payment Check</Text>
        </TouchableOpacity>
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
    elevation: 3, // For Android shadow
    margin: 10,
    paddingBottom: 0,
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
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
    marginLeft: 8,
  },
  value: {
    marginLeft: 5,
    color: '#555',
  },
  button: {
    backgroundColor: '#5CB9E9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    margin: '3%',
    width: '50%',
  },
  buttonText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
});
