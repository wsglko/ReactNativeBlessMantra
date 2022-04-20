import React,{useEffect} from "react";
import { SafeAreaView, ScrollView, View, Image, StyleSheet, StatusBar } from "react-native";

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Home");
        }, 5000)
    }, []);
    
    return (
        <SafeAreaView style={{flex:1, backgroundColor:"#fff"}}>
            <StatusBar
                backgroundColor="#fff"
                barStyle="light-content"
            />
                <View style={styles.container}>
                    <Image
                        source={require("../../images/bm1.jpeg")}
                        style={{
                            width: "90%",
                            resizeMode: "contain",
                            margin: 30,
                        }}
                    />
                </View>
        </SafeAreaView>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        //backgroundColor: "#fff",
    }
})