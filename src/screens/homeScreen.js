/* eslint-disable no-unused-vars */

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Animated} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HomeTabs from '../components/homeTabs';
import FileDetailsCard from '../components/fileDetailsCard';
import {fetchUserFiles} from '../redux/reducers/userFiles';
import {retrieveUser} from '../storage/loginAuth';
import WeeklyCalendar from '../components/weeklyCalendar'; // adjust path
import moment from 'moment';

export default function Home() {
  const dispatch = useDispatch();
  const {files, loading, error} = useSelector(state => state.files);
  const [storedToken, setStoredToken] = useState(null);
  const [profileId, setProfileId] = useState(null);
  const [selectedDate, setSelectedDate] = useState(moment());
  const [spinValue] = useState(new Animated.Value(0));

  // Start rotating animation
  useEffect(() => {
    if (loading) {
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ).start();
    }
  }, [loading, spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    const getUser = async () => {
      const user = await retrieveUser();
      console.log('fffff', user);

      if (user) {
        setProfileId(user.id); // ✅ Update state
        setStoredToken(user.token);
        console.log('jjjjjjjjjj', user.id);
        console.log('tttttttttt', user.token);
      } else {
        console.log('No user found in storage');
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    dispatch(fetchUserFiles());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {/* Weekly Calendar */}
      <WeeklyCalendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      {/* HomeTabs Component */}
      <HomeTabs />

      {/* Scrollable Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        {/* Custom Loading Indicator */}
        {loading ? (
          <View style={styles.loadingIndicator}>
            <Animated.View
              style={[styles.spinner, {transform: [{rotate: spin}]}]}
            />
          </View>
        ) : error ? (
          <Text style={styles.errorText}>Error: {error}</Text>
        ) : files && files.length > 0 ? (
          files.map((file, index) => (
            <FileDetailsCard key={index} file={file} />
          ))
        ) : (
          <Text>No files available</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  scrollContainer: {
    paddingBottom: 20, // Adds spacing to prevent cutoff at the bottom
  },
  tokenContainer: {
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  tokenText: {
    fontSize: 16,
    color: 'green',
  },
  loadingIndicator: {
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    width: 30,
    height: 30,
    borderRadius: 25, // Circular shape
    borderWidth: 5,
    borderColor: '#307BA1', // Change color
    borderTopColor: 'transparent', // Hide top portion for spinning effect
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 16,
  },
});
