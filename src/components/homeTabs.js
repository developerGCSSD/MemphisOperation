/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HomeTabs() {
  const [selectedTab, setSelectedTab] = useState("Today's Files");

  const tabs = [
    {id: "Today's Files", label: "Today's Files"},
    {id: 'Somthing1', label: 'Somthing1'},
    {id: 'Somthing2', label: 'Somthing2'},
  ];

  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.id}
          style={[
            styles.tab,
            selectedTab === tab.id ? styles.selectedTab : styles.unselectedTab,
          ]}
          onPress={() => setSelectedTab(tab.id)}>
          <Icon
            name="briefcase"
            size={20}
            color={selectedTab === tab.id ? 'white' : 'black'}
          />
          <Text
            style={[
              styles.text,
              {color: selectedTab === tab.id ? 'white' : 'black'},
            ]}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tab: {
    width: 110,
    height: 70,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1%',
    marginBottom: '3%',
    padding: '2%',
  },
  selectedTab: {
    backgroundColor: '#307BA1',
    borderWidth: 1,
    borderColor: '#307BA1',
  },
  unselectedTab: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#EBEEF5',
  },
  text: {
    marginTop: 10,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
