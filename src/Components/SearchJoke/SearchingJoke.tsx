import React, { useState } from "react";
import { Alert, Button, Modal, Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { RANDOM_JOKES } from "../../redux/Chuck/actions";
import { jokePayload, jokeType } from "../../utils/jokePayload.interface";
import styles from "./style";

interface InputJokeInterface {
    getJoke: Function,
    joke: string,
    route: {
        params: {
            isExplicit: boolean
        }
    }
}

const InputJokeComponent = ({ getJoke, joke, route }: InputJokeInterface) => {
    const { isExplicit } = route.params
    const [name, onChangeName] = React.useState<string>("");
    const [modalVisible, setModalVisible] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false)

    const Validate = () => {
        const newFullName = name.split(" ")
        const fullNameArray = newFullName.join(" ").trim().split(' ');
        const firstName = fullNameArray[0]
        const lastName = fullNameArray[1]
        if (fullNameArray.length == 2) {
            setModalVisible(true)
            setErrorMsg(false)

            const jokePayload: jokePayload = {
                isExplicit,
                type: jokeType.search,
                metadata: {
                    firstName,
                    lastName
                }
            }
            getJoke(jokePayload);
        }
        else {
            setErrorMsg(true)
        }
    }
    const Clear = () => {
        onChangeName("")
    }


    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeName}
                value={name}
            />
            <Button
                title="Search"
                onPress={Validate}
            />
            {
                errorMsg ?
                    <Text style={styles.errorMsg}>
                        Please Enter First Name and Last Name
                    </Text> : null
            }
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            {joke}
                        </Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                Clear();
                                setModalVisible(!modalVisible)
                            }}
                        >
                            <Text style={styles.textStyle}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};


export const mapStateToProps = (state: any) => ({
    joke: state.chuck.joke
})

export const mapDispatchToProps = (dispatch: any) => ({

    getJoke: (payload: jokePayload) => {
        dispatch({ type: RANDOM_JOKES, payload })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(InputJokeComponent);
