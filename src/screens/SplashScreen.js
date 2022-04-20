import React from "react";
import { SafeAreaView, ScrollView, View, Image, StyleSheet } from "react-native";

const SplashScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1}}>
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
    }
})