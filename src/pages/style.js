import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        alignItems: 'center',
    },
    title: {
        color: '#292929f3',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30
    },
    inputContainer: {
        flex: 1,
        marginTop: 30,
        width: '90%',
        padding: 20,
        alignItems: 'stretch',
        backgroundColor: '#fff'
    },
    input: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch'
    },
    button: {
        marginTop: 15,
        height: 60,
        backgroundColor: '#4CAF50',
        borderRadius: 5,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    lista: {
        flex: 1,
        width: '100%',
        marginTop: 10
    },
    campolista: {
        flexDirection: 'row',
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderColor: '#dedede',
        borderBottomWidth: 1,
        flex: 1,
        width: '100%'
    },
    campoconteudo: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 12,
        width: '75%'
    },
    emptyList: {
        textAlign: 'center',
        marginVertical: 20
    },
    box: {
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
        paddingHorizontal: 40,
        paddingTop: 50,
        paddingBottom: 30,
        marginVertical: 50,
        marginHorizontal: 30
    },
    titleBox: {
        color: '#292929f3',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 15
    },
    desc: {
        color: '#292929f3',
        fontSize: 18,
        marginVertical: 5,
        textAlign: 'justify'
    },
    img: {
        width: 150,
        height: 150,
        marginBottom: 25,
        alignItems: 'center',
    },
    dataVazio: {
        textAlign: 'center',
        borderWidth:1,
        borderRadius:10,
        borderColor:'gray',
        paddingHorizontal:20,
        paddingVertical:12,
        marginVertical: 10
    },
    comboBox: {
        backgroundColor: 'gray'
    }
});