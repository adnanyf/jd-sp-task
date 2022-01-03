import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200,
        alignSelf: "center",
    },
    searchJokeButton: {
        alignSelf: "center",
        backgroundColor: "#41A8DE",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: "33%",
        minWidth: "50%"
    },
    text: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    jokesList: {
        margin: 10
    }
});
export default styles
