import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import HomeTabs from '../components/homeTabs';
import FileDetailsCard from '../components/fileDetailsCard';
import {retrieveToken} from '../storage/loginAuth'; // Import retrieveToken function from storage file

export default function Home() {
  const [storedToken, setStoredToken] = useState(null); // Store the retrieved token
  const [profileId, setProfileId] = useState(null); // Store the retrieved profile ID

  useEffect(() => {
    const getTokenData = async () => {
      const {token, profileId} = await retrieveToken(); // Retrieve the token and profileId from AsyncStorage
      setStoredToken(token); // Set token in local state
      setProfileId(profileId); // Set profileId in local state
    };

    getTokenData(); // Call the function to get token data from AsyncStorage
  }, []); // Empty dependency array to only run this effect once when the component mounts

  return (
    <View style={styles.container}>
      {/* HomeTabs Component */}
      <HomeTabs />

      {/* Scrollable Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        {/* Display Token and Profile ID */}
        {storedToken && profileId && (
          <View style={styles.tokenContainer}>
            {/* <Text style={styles.tokenText}>Token: {storedToken}</Text> */}
            <Text style={styles.tokenText}>Profile ID: {profileId}</Text>
          </View>
        )}

        {/* Scrollable File Cards */}
        <FileDetailsCard />
        <FileDetailsCard />
        <FileDetailsCard />
        <FileDetailsCard />
        <FileDetailsCard />
        <FileDetailsCard />
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
  button: {
    backgroundColor: '#5CB9E9',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    margin: '5%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
