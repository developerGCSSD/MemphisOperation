/* eslint-disable no-shadow */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HomeTabs from '../components/homeTabs';
import FileDetailsCard from '../components/fileDetailsCard';
import {fetchUserFiles} from '../redux/reducers/userFiles';
import {retrieveUser} from '../storage/loginAuth';

export default function Home() {
  const dispatch = useDispatch();
  const {files, loading, error} = useSelector(state => state.files);
  const [storedToken, setStoredToken] = useState(null);
  const [profileId, setProfileId] = useState(null);
  // console.log('kkkkk', profileId);
  // console.log(files);

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

  if (loading) {
    return <Text>Loading files...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      {/* HomeTabs Component */}
      <HomeTabs />
      {/* Scrollable Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        {/* {storedToken && profileId && (
          <View style={styles.tokenContainer}>
            <Text style={styles.tokenText}>Profile ID: {profileId}</Text>
          </View>
        )} */}

        {files && files.length > 0 ? (
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
});
