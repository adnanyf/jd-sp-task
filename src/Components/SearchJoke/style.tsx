import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    searchJokeButton: {
        alignSelf: "center",
        backgroundColor: "#41A8DE",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: "33%",
        minWidth: "50%"
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200,
        alignSelf: "center",
    },
    errorMsg: {
        alignSelf: "center",
        color: "red",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        top: 30,
        alignItems: "center",
        marginTop: 22
    },
    buttonContainer: {
        marginTop: 100,
        alignItems: "center",
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
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },

    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
export default styles
