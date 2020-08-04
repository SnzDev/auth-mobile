import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import axios from 'axios';

import Style from './style';


export default function Profile() {
    const navigation = useNavigation();

    function navigateToSignIn() {
        navigation.navigate('SignIn')
    }

    const [name, setName] = useState('tha');
    const [email, setEmail] = useState('tms@gmail.com');
    const [password, setPassword] = useState('t272egwj');
    const [cellphone, setCellphone] = useState('086999135090');

    async function handleSubmit() {
        if (confirmPassword == password) {
            const response = await axios.post('http://191.7.210.2:25565/users', { name, email, password });
            if (response.data.length > 0)
                alert('Cadastrado com sucesso!, Id: ' + response.data[0])
            navigateToSignIn();
        } else {
            { alert('Senhas Diferentes') }
        }
    }
    return (
        <View style={Style.container}>
            <Text style={Style.title}>Seus Dados</Text>
            <View style={Style.formContainer}>
                <View style={Style.inputContainer}>
                    <Text style={Style.inputText}>Nome Completo</Text>
                    <TextInput
                        style={Style.input}
                        value={name}
                        onChangeText={e => { setName(e) }} />
                </View>
                <View style={Style.inputContainer}>
                    <Text style={Style.inputText}>Email</Text>
                    <TextInput
                        style={Style.input}
                        value={email}
                        onChangeText={e => { setEmail(e) }} />
                </View>
                <View style={Style.inputContainer}>
                    <Text style={Style.inputText}>Senha</Text>
                    <TextInput
                        style={Style.input}
                        value={password}
                        onChangeText={e => { setPassword(e) }} />
                </View>
                <View style={Style.inputContainer}>
                    <Text style={Style.inputText}>Telefone</Text>
                    <TextInput
                        style={Style.input}
                        value={cellphone}
                        onChangeText={e => { setCellphone(e) }} />
                </View>
            </View>
            <View style={Style.optionsContainer}>
                <TouchableOpacity onPress={handleSubmit}>
                    <View style={Style.buttonSubmit}>
                        <Text style={Style.textButton}>Confirmar Dados</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateToSignIn}>
                    <View style={Style.buttonSubmit}>
                        <Text style={Style.textButton}>Corrigir Dados</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>


    );
}

