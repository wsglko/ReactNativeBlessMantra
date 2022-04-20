import React,{useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, View , StyleSheet} from 'react-native';
import { Text, Button } from 'react-native-paper'
import auth from "@react-native-firebase/auth";
import { Login } from '../components/Login';

export default function HomeScreen({navigation}) {

	const calling = () => {
		auth().currentUser ? "Calling" : <Login/>;
	}
  return (
      <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
              <View style={styles.sectionContainer}>
				<Button style={{margin:5,padding:5}} color="green" mode="contained" icon="phone" onPress={()=>calling}>Calling</Button>
				<Button style={{margin:5,padding:5}} color="blue" mode="contained" icon="wechat">Calling</Button>
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