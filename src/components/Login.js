import React,{useState} from 'react';
import { View } from 'react-native';
import { TextInput, Modal, Portal, Text, Headline, Button} from 'react-native-paper';

export function Login ({navigation}) {
    const [visible, setVisible] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};

    return (
        <Portal>
            <Modal style={{margin:5, padding:5}} visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <Headline>Please Login/Register!</Headline>
                <TextInput label="Username" value={username} onChangeText={(txt)=>setUsername(txt)} left={<TextInput.Icon name="email"/>} />
                <TextInput label="Password" value={username} onChangeText={(txt)=>setUsername(txt)} left={<TextInput.Icon name="key"/>} right={<TextInput.Icon name="eye" />} />
                <View style={{margin: 5, padding:5, flexDirection:"row", justifyContent:"space-between", alignContent:"center", alignItems:"center"}}>
                    <Button mode="contained" color="green" onPress={hideModal}>Login</Button>
                    <Button mode="contained" color="teal" onPress={showModal}>Register</Button>
                </View>
            </Modal>
        </Portal>
    )
}