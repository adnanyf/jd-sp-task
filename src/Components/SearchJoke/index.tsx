import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import styles from "./style";


const SearchJokeComponent = ({ isExplicit, navigation }: any) => {
    return (
        <SafeAreaView>
            <TouchableOpacity
                style={styles.searchJokeButton}
                onPress={() => navigation.navigate('Searching', { isExplicit })}
            >
                <Text style={styles.textStyle} >Search Joke</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};


export default SearchJokeComponent;