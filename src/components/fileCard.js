import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FileCard() {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.card}>
      {/* Checkbox with Grey Border */}
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setChecked(!checked)}>
        <View style={[styles.checkboxWrapper, checked && styles.checked]}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color="#F4B400"
          />
        </View>
      </TouchableOpacity>

      {/* File Info */}
      <View style={styles.row}>
        <Icon name="folder" size={20} color="#F4B400" />
        <Text style={styles.label}>Files:</Text>
        <Text style={styles.value}>10222/2/2025</Text>
      </View>

      {/* Activity Info */}
      <View style={styles.row}>
        <Icon name="map-marker" size={20} color="red" />
        <Text style={styles.label}>Activity:</Text>
        <Text style={styles.value}>Day Tour in Fayoum</Text>
      </View>

      {/* Date Info */}
      <View style={styles.row}>
        <Icon name="calendar" size={20} color="black" />
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>10/3/2025</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  value: {
    marginLeft: 5,
    color: 'gray',
  },
  checkboxContainer: {
    position: 'absolute',
    top: 10,
    right: 20,
    backgroundColor: 'grey',
  },
  checkboxWrapper: {
    borderWidth: 2,
    borderRadius: 5, // Rounded corners
  },
  checked: {
    borderColor: '#F4B400', // Change border color when checked
  },
});
