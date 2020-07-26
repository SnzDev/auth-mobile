import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 150,
        backgroundColor: '#eee',
    },
    container: {
        backgroundColor: '#fffe',
        padding: 20,
        borderRadius: 15,
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
        padding: 5,
    },

    title: {
        fontSize: 42,
        marginBottom: 80,
        color: "#6b71f2",
    },
    input: {
        width: 300,
        fontSize: 20,
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
    },
    btn: {
        backgroundColor: '#6b71f2',
        borderRadius: 10,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
    },
    nameBtn: {
        fontSize: 24,
        fontWeight: '400',
        justifyContent: 'center',

    },
    containerButton: {
        width: 290, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginTop: 20,
    }
});

