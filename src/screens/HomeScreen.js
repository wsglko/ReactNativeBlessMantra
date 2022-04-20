import React,{useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, View , StyleSheet} from 'react-native';
import { Text, Button, IconButton, Searchbar } from 'react-native-paper'
import auth from "@react-native-firebase/auth";

export default function HomeScreen({navigation}) {
	const [user, setUser] = useState("");
	useEffect(() => {
		setUser(auth().currentUser);
	},[])

	const calling = (e) => {
		e.preventDefault();
		user ? alert("Calling") : navigation.replace("Login");
	}
  return (
      <SafeAreaView>
		  <View style={{flexDirection:"row", backgroundColor:"#fff", padding:10, alignItems:"center", justifyContent:"space-between"}}>
				<IconButton icon="menu"/>
				<Text style={{fontFamily:"Ubuntu-Regular.ttf", fontSize:20}}>blessMantra</Text>
				<IconButton icon="wallet"/>
				<IconButton icon="google-translate"/>
				<IconButton icon="account"/>
		  </View>
          <ScrollView style={{backgroundColor:"#fff"}}>
			  <Searchbar />
			  <View style={{display:"flex", flexWrap:"wrap", flexDirection:"row", padding:5,justifyContent:"center", alignContent:"center",alignItems:"center"}}>
					<Text style={{width:"25%", textAlign:"justify", borderWidth:1, borderColor:"orange", borderRadius:30, padding:10}}>Free Kundali</Text>
					<Text style={{width:"25%",borderWidth:1,textAlign:"justify", borderColor:"orange", borderRadius:30, padding:10}}>Daily Horoscope</Text>
					<Text style={{width:"25%", borderWidth:1, borderColor:"orange",textAlign:"justify", borderRadius:30, padding:10}}>Match Making</Text>
					<Text style={{width:"25%",borderWidth:1, borderColor:"orange", borderRadius:30,textAlign:"auto", padding:10}}>General Prediction</Text>
			  </View>
              <View>
				<Button style={{margin:5,padding:5}} color="green" mode="contained" icon="phone" onPress={calling}>Calling</Button>
				<Button style={{margin:5,padding:5}} color="blue" mode="contained" icon="wechat">Chat</Button>
				<Button style={{margin:10, padding:10}} color="teal" mode="contained" onPress={()=>navigation.replace("splash")}>Spash Screen</Button>
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