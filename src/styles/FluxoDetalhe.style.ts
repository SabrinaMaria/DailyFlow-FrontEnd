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
    },
    middleView: {
        width: 370,
        height: 50,
        marginBottom: -310,
        backgroundColor: '#F0F8FF',
        borderWidth: 0.3,
        borderColor: '#6495ED',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
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