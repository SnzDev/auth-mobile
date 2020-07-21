import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

import Style from './style';


export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={Style.container}>
            <Text style={Style.title}>SignIn</Text>
            <View style={Style.inputContainer}>
                <View>
                    <Text style={Style.nameInput}>E-mail:</Text>
                    <TextInput
                        style={Style.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </View>
                <View >
                    <Text style={Style.nameInput}>Password:</Text>
                    <TextInput
                        style={Style.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </View>
                <TouchableOpacity style={Style.btn} onclick={() => { alert('OPA') }}>
                    <View>
                        <Text style={Style.nameBtn}>CLICK HERE!</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
