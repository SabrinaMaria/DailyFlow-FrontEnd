import { StyleSheet } from 'react-native';

export const LoteDetalheStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    scrollCont: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 50,
    },
    text: {
        color: '#4169E1',
        fontSize: 50,
        textShadowColor: '#98FB98',
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        width: 340,
        marginBottom: 15,
        marginTop: 5,
        borderWidth: 0.3,
        borderRadius: 5,
        padding: 10,
    },
    lastInput: {
        height: 40,
        width: 340,
        marginBottom: /*160*/80,
        marginTop: 5,
        borderWidth: 0.3,
        borderRadius: 5,
        padding: 10,
    },
    middleView: {
        width: 370,
        height: 50,
        marginBottom: /*150*/60,
        backgroundColor: '#F0F8FF',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    middleView2: {
        width: 340,
        height: 80,
        paddingLeft: 20,
        marginTop: 100,
        marginBottom: 60,
        marginLeft: 10,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        flex: 1,
        flexDirection: 'row',
    },
    bottomView: {
        width: 370,
        height: 50,
        backgroundColor: '#6495ED',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
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
    textButton2: {
        width: 370,
        height: 50,
        paddingTop: 12,
        textAlign: 'center',
        fontSize: 18,
        color: '#6495ED',
        fontWeight: 'bold',
    },
    atualizacaoColumn: {
        marginRight: 60,
    },
    textAtualizacao: {
        color: 'grey',
    },
    pressable: {
        marginLeft: -10,
    },
    atualizacoesLabel: {
        fontSize: 25,
        paddingTop: 10,
        marginBottom: 15,
        color: '#6495ED',
    },
    racaPicker: {
        borderWidth: 0.3,
        borderRadius: 5,
        marginBottom: 15,
        marginTop: 5,
    }
});