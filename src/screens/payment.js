import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function PaymentScreen({route}) {
  const {fileName, paymentDate, transactionId, amount, bank} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Payment Details</Text>

        <Text style={styles.label}>
          File Name: <Text style={styles.value}>{fileName}</Text>
        </Text>
        <Text style={styles.label}>
          Payment Date: <Text style={styles.value}>{paymentDate}</Text>
        </Text>
        <Text style={styles.label}>
          Transaction ID: <Text style={styles.value}>{transactionId}</Text>
        </Text>
        <Text style={styles.label}>
          Amount: <Text style={styles.value}>{amount}</Text>
        </Text>
        <Text style={styles.label}>
          Bank: <Text style={styles.value}>{bank}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#307BA1',
    marginBottom: 30,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: '3%',
    color: '#333',
    padding: '3%',
  },
  value: {
    fontWeight: 'normal',
    color: '#666',
  },
});
