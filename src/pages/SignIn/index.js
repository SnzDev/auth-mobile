import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import axios from 'axios';

import Style from './style';




export default function SignIn() {



    const navigation = useNavigation();

    function navigateToSignUp() {
        navigation.navigate('SignUp');
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit() {
        //alert('Email: ' + email + '\n' + 'Password: ' + password);
        try {
            const response = await axios.post('http://192.168.1.53:3333/user', { email, password });

            if (response.data.length > 0) {
                alert('Id: ' + response.data[0].id + '\n' + 'Nome: ' + response.data[0].name + '\n' + 'Email: ' + response.data[0].email)

                //localStorage.setItem('session-id', response.data[0].id)
            } else {
                alert('Email ou senha incorreta!')

                console.log(response);
            }
            return response;

        } catch (err) {
            console.error(err);
        }

    }


    return (
        <View style={Style.body}>
            <Text style={Style.title}>Sign In</Text>
            <View style={Style.container}>
                <View style={Style.inputContainer}>
                    <TextInput
                        style={Style.input}
                        placeholder="Email"
                        placeholderTextColor="black"
                        value={email}
                        onChangeText={(e) => { setEmail(e) }}
                    />
                </View>
                <View style={Style.inputContainer}>

                    <TextInput
                        style={Style.input}
                        placeholder="Password"
                        placeholderTextColor="black"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(e) => { setPassword(e) }}
                    />
                </View></View>
                <View style={Style.containerButton}>
                    <TouchableOpacity style={Style.btn} onPress={handleSubmit}>
                        <View>
                            <Text style={Style.nameBtn}>Sign In</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={Style.btn}>
                        <TouchableOpacity onPress={navigateToSignUp}>
                            <View>
                                <Text style={Style.nameBtn}>Sign Up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        

    );
}

