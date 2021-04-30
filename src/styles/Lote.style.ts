import { StyleSheet } from 'react-native';

export const LotesStyles = StyleSheet.create({
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
    firstLote: {
        paddingTop: 20,
        color: 'black',
        fontSize: 20,
    },
    allLotes: {
        color: 'black',
        fontSize: 20,
    },
    lastLote: {
        marginBottom: 220,
        borderBottomWidth: 0.3,
        borderBottomColor: 'gray',
        margin: 20,
        marginTop: 0,
        paddingBottom: 20,
        flex: 1,
        flexDirection: 'row',
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
    aberto: {
        color: 'green',
    },
    fechado: {
        color: 'red',
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 140,
        marginRight: 7,
        justifyContent: 'space-between',
    },
    buttons1: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 140,
        marginRight: 7,
        justifyContent: 'space-between',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
    },
    buttonClose: {
        borderWidth: 1,
        borderColor: "#6495ED",
    },
    buttonConfirm: {
        backgroundColor: "#6495ED",
        marginLeft: 5,
        marginRight: -55,
    },
    textStyleConfirm: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    textStyleClose: {
        color: "#6495ED",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalButtons: {
        flexDirection: 'row',
        marginBottom: -10,
    }
});