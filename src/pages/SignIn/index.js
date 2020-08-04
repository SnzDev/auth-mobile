import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput} from 'react-native';
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
            const response = await axios.post('http://191.7.210.2:25565/user', { email, password });

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
        <View style={Style.container}>
            <Text style={Style.title}>Nome do App</Text>

            <View style={Style.formContainer}>
                <View style={Style.inputContainer}>
                    <Text style={Style.inputText}>Email</Text>
                    <TextInput style={Style.input}
                    value={email}
                    onChangeText={e=>{setEmail(e)}} />
                </View>
                <View style={Style.inputContainer}>
                    <Text style={Style.inputText}>Senha</Text>
                    <TextInput style={Style.input}
                    value={password}
                    onChangeText={(e)=>{setPassword(e)}}
                    secureTextEntry={true}/>
                </View>

                <TouchableOpacity>
                    <View style={Style.buttonSubmit}>
                        <Text style={Style.textButton} onPress={handleSubmit}>Entrar</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={Style.optionsContainer}>
                <TouchableOpacity>
                    <View style={Style.buttonSubmit}>
                        <Text style={Style.textButton} onPress={navigateToSignUp}>Cadastre-se</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={Style.buttonSubmit}>
                        <Text style={Style.textButton}>Recuperar Senha</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
}