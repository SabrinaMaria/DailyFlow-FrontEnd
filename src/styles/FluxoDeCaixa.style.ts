import { StyleSheet } from 'react-native';

export const FluxoStyles = StyleSheet.create({
    container: {
        borderBottomWidth: 0.3,
        borderBottomColor: 'gray',
        margin: 20,
        marginTop: 0,
        paddingBottom: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    firstFluxo: {
        paddingTop: 20,
        color: 'black',
        fontSize: 20,
    },
    allFluxos: {
        color: 'black',
        fontSize: 20,
    },
    lastFulxo: {
        marginBottom: 210,
        borderBottomWidth: 0.3,
        borderBottomColor: 'gray',
        margin: 20,
        marginTop: 0,
        paddingBottom: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomView: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#6495ED',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginLeft: 280,
        bottom: 0
    },
    textButton: {
        paddingRight: 9,
        paddingBottom: 5,
        textAlign: 'center',
        fontSize: 40,
        color: '#F0F8FF',
        fontWeight: 'bold',
    },
    pressable: {
        marginLeft: -10,
    },
    receita: {
        color: 'green',
    },
    despesa: {
        color: 'red',
    },
    descEValor: {
        marginTop: 20,
    },
    button: {
        borderRadius: 20,
        padding: 10,
    },
    descText: {
        fontSize: 18,
        textAlign: 'right',
        color: 'black'
    },
    valorTextD: {
        fontSize: 20,
        textAlign: 'right',
        color: 'red'
    },
    valorTextR: {
        fontSize: 20,
        textAlign: 'right',
        color: 'green'
    },
    periodoPicker: {
        width: 150,
        borderWidth: 0.3,
        borderRadius: 5,
        marginBottom: 15,
        marginLeft: 15,
        marginTop: 5,
    },
    comboText: {
        marginLeft: 15
    },
    combosSpace: {
        marginLeft: 15
    },
    combos: {
        marginTop: 15,
        flexDirection: 'row'
    }
});