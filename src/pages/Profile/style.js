import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    title:{
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
        borderColor: '#c0c0c0',
        borderBottomWidth:2,
    },
    inputContainer:{
        padding:10,
    },
    formContainer:{
        marginTop: 20,
        alignItems: 'flex-start',
    },
    buttonSubmit:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding:16,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 18,
        textDecorationLine: 'underline',
    },
    optionsContainer:{
        alignItems: 'flex-start',
        marginRight: 100,
    },


});

