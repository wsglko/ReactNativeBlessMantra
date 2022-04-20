import React,{useState, createRef} from 'react';
import { View, Keyboard } from 'react-native';
import { TextInput, Modal, Portal, Text, Headline, Button, IconButton} from 'react-native-paper';
import auth from "@react-native-firebase/auth";

export default function Login ({navigation}) {
    const [visible, setVisible] = useState(true);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [showRegister, setShowRegister] = useState(false);

    const containerStyle = {backgroundColor: 'white', padding: 20};

    const emailInputRef = createRef();
    const passwordInputRef = createRef();

    const loginCheck = () => {
        if (!userEmail) {
            alert("Please fill Email");
            return;
        }
        if (!password) {
            alert("Please fill Password");
            return;
        }
        auth()
            .signInWithEmailAndPassword(userEmail, password)
            .then((user) => {
                console.log(user);
                setUserName("");
                setUserEmail("");
                setPassword("");
            })
            .catch((err) => {
                if (err.code === "auth/invalid-email") {
                    alert("Invalid Email Address "+err.message);
                    setUserEmail("");
                    setPassword("");
                } else if (err.code === "auth/user-not-found") {
                    setUserName("");
                    setUserEmail("");
                    setPassword("");
                    setShowRegister(true);
                    alert("No Email found, please Register first");
                } else {
                    alert("Please check your Password");
                    setPassword("");
                }
            })
    }

    const registerEmail = () => {
        if (!userName) return alert("Please fill Username");
        if (!userEmail) return alert("Please fill Email");
        if (!password) return alert("Please fill Password");

        auth()
            .createUserWithEmailAndPassword(
                userEmail,
                password
            )
            .then((user) => {
                console.log("Registration Done");
                console.log(user);
                if (user) {
                    auth()
                        .currentUser.updateProfile({
                            displayName: userName,
                        })
                        .then(() => navigation.replace("Home"))
                        .catch((error) => {
                            alert(error);
                            console.error(error);
                        });
                }
            })
            .catch((error) => {
                console.log(error);
                if (error.code === "auth/email-already-in-use") {
                    alert("Email address is already in use");
                } else {
                    alert(error.message);
                }
            });
    };

    return (
        <Portal>
            <Modal style={{margin:5, padding:5}} visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <View style={{flexDirection:"row", margin:5, justifyContent:"space-around"}}>
                    <Headline>Please Login/Register!</Headline>
                    <IconButton
                        icon="close-circle"
                        size={20}
                        color="gray"
                        onPress={()=>hideModal()}
                    />
                </View>
                {showRegister ? <View>
                    <TextInput 
                        returnKeyType="next" 
                        label="Username" 
                        value={userName} 
                        onChangeText={(txt)=>setUserName(txt)} 
                        left={<TextInput.Icon name="account"/>} 
                    />
                    <TextInput 
                        ref={emailInputRef} 
                        returnKeyType="next" 
                        label="Email" 
                        keyboardType="email-address"
                        value={userEmail} 
                        onChangeText={(txt)=>setUserEmail(txt)} 
                        left={<TextInput.Icon name="email"/>} 
                    />
                    <TextInput 
                        ref={passwordInputRef} 
                        onSubmitEditing={Keyboard.dismiss} 
                        secureTextEntry={true} 
                        returnKeyType="next" 
                        label="Password" 
                        value={password} 
                        onChangeText={(txt)=>setPassword(txt)} 
                        left={<TextInput.Icon name="key"/>} 
                        right={<TextInput.Icon name="eye" />} 
                    /></View> : <View>
                    <TextInput 
                        ref={emailInputRef} 
                        returnKeyType="next" 
                        label="Email" 
                        value={userEmail} 
                        keyboardType="email-address"
                        onChangeText={(txt)=>setUserEmail(txt)} 
                        left={<TextInput.Icon name="email"/>} 
                    />
                    <TextInput 
                        returnKeyType="next"
                        ref={passwordInputRef} 
                        onSubmitEditing={Keyboard.dismiss} 
                        secureTextEntry={true}
                        label="Password" 
                        value={password} 
                        onChangeText={(txt)=>setPassword(txt)} 
                        left={<TextInput.Icon name="key"/>} 
                        right={<TextInput.Icon name="eye" />} 
                    />
                    </View>}
                <View style={{margin: 5, padding:5, flexDirection:"row", justifyContent:"center", alignContent:"center", alignItems:"center"}}>
                    {
                        showRegister ? 
                        <Button 
                            mode="contained" 
                            color="teal" 
                            onPress={registerEmail}
                        >
                            Register
                        </Button> : 
                        <Button 
                            mode="contained" 
                            color="green" 
                            onPress={loginCheck}
                        >
                            Login
                        </Button>
                        }
                </View>
            </Modal>
        </Portal>
    )
};