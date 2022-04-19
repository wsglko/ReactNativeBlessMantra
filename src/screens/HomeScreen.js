import React from 'react';
import { SafeAreaView, ScrollView, View , StyleSheet} from 'react-native';
import { Text } from 'react-native-paper'
import { Login } from '../components/Login';

export default function HomeScreen({navigation}) {
  return (
      <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
              <View style={styles.sectionContainer}>
                <Login/>
              </View>
          </ScrollView>
      </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });