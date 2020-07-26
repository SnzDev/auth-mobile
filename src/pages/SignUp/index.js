import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import axios from 'axios';

import Style from './style';


export default function SignIn() {
    const navigation = useNavigation();

    function navigateToSignIn(){
        navigation.navigate('SignIn')
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit() {

        const response = await axios.post('http://192.168.1.53:3333/users', { name, email, password });
        if(response.data.length>0)
            //alert('Cadastrado com sucesso!, Id: ' + response.data[0])
            navigateToSignIn();

        
    }
    return (
        <View style={Style.container}>
            <Text style={Style.title}>SignUp</Text>
            <View style={Style.inputContainer}>

                <TextInput
                    style={Style.input}
                    placeholder="Name"
                    placeholderTextColor="black"
                    value={name}
                    onChangeText={(e) => {setName(e)}}
                />
            </View>
            <View style={Style.inputContainer}>

                <TextInput
                    style={Style.input}
                    placeholder="Email"
                    placeholderTextColor="black"
                    value={email}
                    onChangeText={(e) =>{ setEmail(e)}}
                />
            </View>
            <View style={Style.inputContainer}>

                <TextInput
                    style={Style.input}
                    placeholder="Password"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(e) =>{setPassword(e)}}
                />
            </View>
            <TouchableOpacity style={Style.btn} onPress={() => { handleSubmit() }}>
                <View>
                    <Text style={Style.nameBtn}>CLICK HERE!</Text>
                </View>
            </TouchableOpacity>
        </View>

    );
}

