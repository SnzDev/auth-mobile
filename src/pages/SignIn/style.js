import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    title:{
        width: 150,
        textAlign: 'center',
        fontSize: 56,
        fontWeight: 'bold',
    },
    inputText:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    input:{
        width: 240,
        borderWidth: 3,
        borderColor: '#c0c0c0',
        backgroundColor: '#e1e1e1',
    },
    inputContainer:{
        padding:16,
    },
    formContainer:{
        marginTop: 20,
    },
    buttonSubmit:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding:16,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 18,
        textDecorationLine: 'underline'
    },
    optionsContainer:{
        alignItems: 'center',
    },


});

