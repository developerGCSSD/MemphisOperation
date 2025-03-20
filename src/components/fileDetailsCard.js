import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function FileDetailsCard({onClose}) {
  return (
    <View style={styles.card}>
      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Icon name="times-circle" size={20} color="gray" />
      </TouchableOpacity>

      {/* File Details */}
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
        <Icon name="calendar-alt" size={18} color="gray" />
        <Text style={styles.label}> Date:</Text>
        <Text style={styles.value}>10/3/2025</Text>
      </View>

      <View style={styles.row}>
        <Icon name="user" size={18} color="#76C893" />
        <Text style={styles.label}> Guest Name:</Text>
        <Text style={styles.value}>Mohamed Ahmed</Text>
      </View>

      <View style={styles.row}>
        <Icon name="flag" size={18} color="red" />
        <Text style={styles.label}> Nationality:</Text>
        <Text style={styles.value}>United States</Text>
      </View>

      <View style={styles.row}>
        <Icon name="user-tie" size={18} color="gold" />
        <Text style={styles.label}> Operator:</Text>
        <Text style={styles.value}>Ali Mohamed</Text>
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
});
