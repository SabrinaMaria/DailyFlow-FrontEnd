import { StyleSheet } from 'react-native';

export const FluxoDetalheStyles = StyleSheet.create({
    scrollCont: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 50,
    },
    bottomView: {
        width: 370,
        height: 50,
        backgroundColor: '#6495ED',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginTop: 620
    },
    textButton: {
        width: 370,
        height: 50,
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 20,
        color: '#F0F8FF',
        fontWeight: 'bold',
    },
    pressable: {
        marginLeft: -10,
    },
    inputDesc: {
        height: 40,
        width: 340,
        marginTop: 5,
        borderWidth: 0.3,
        borderRadius: 5,
        padding: 10,
    },
    input: {
        height: 40,
        width: 160,
        marginBottom: 15,
        marginTop: 5,
        borderWidth: 0.3,
        borderRadius: 5,
        padding: 10,
    },
    periodoPicker: {
        width: 160,
        borderWidth: 0.3,
        borderRadius: 5,
        marginBottom: 15,
        marginTop: 5,
    },
    combosSpace: {
        marginLeft: 20
    },
    combos: {
        marginTop: 25,
        marginBottom: 10,
        flexDirection: 'row'
    }
});