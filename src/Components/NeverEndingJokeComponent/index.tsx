import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import styles from "./style";


const NeverEndingJokeComponent = ({ isExplicit, navigation }: any) => {
    return (
        <SafeAreaView>
            <TouchableOpacity
                style={styles.searchJokeButton}
                onPress={() => navigation.navigate('NeverEndingJokes', { isExplicit })}
            >
                <Text style={styles.text}> Never-ending Jokes </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};


export default NeverEndingJokeComponent;