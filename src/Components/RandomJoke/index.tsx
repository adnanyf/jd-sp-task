import React, { useState } from "react";
import styles from "./style";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import { RANDOM_JOKES } from "../../redux/Chuck/actions";
import { connect } from "react-redux";
import { jokePayload, jokeType } from "../../utils/jokePayload.interface";

interface RandomJokeInterface {
    getJoke: Function,
    joke: string,
    isExplicit: boolean
}

const RandomJoke = ({ getJoke, joke, isExplicit }: RandomJokeInterface) => {
    const [modalVisible, setModalVisible] = useState(false);
    const displayJoke = () => {
        const jokePayload: jokePayload = {
            isExplicit,
            type: jokeType.random
        }
        getJoke(jokePayload);
        setModalVisible(true)
    }
    return (
        <View style={styles.buttonContainer}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            {joke}
                        </Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => displayJoke()}
            >
                <Text style={styles.textStyle}>Random Joke</Text>
            </Pressable>
        </View>
    );
}

export const mapStateToProps = (state: any) => ({
    joke: state.chuck.joke
})

export const mapDispatchToProps = (dispatch: any) => ({

    getJoke: (payload: jokePayload) => {
        dispatch({ type: RANDOM_JOKES, payload })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(RandomJoke);