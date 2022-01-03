import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { StyleSheet, Text, View } from "react-native";
import NeverEndingJokeComponent from "./NeverEndingJokeComponent";
import RandomJoke from "./RandomJoke";
import SearchJokeComponent from "./SearchJoke";
import styles from "./styles";

const HomeComponent = (props: any) => {
    const [isExplicit, setIsExplicit] = useState(false);

    return (
        <View>
            <RandomJoke
                isExplicit={isExplicit}
            />
            <SearchJokeComponent
                {...props}
                isExplicit={isExplicit}
            />
            <NeverEndingJokeComponent
                {...props}
                isExplicit={isExplicit}
            />
            <View style={styles.checkboxStyle}>

                <Checkbox
                    value={isExplicit}
                    onValueChange={setIsExplicit}
                    color={isExplicit ? '#41A8DE' : undefined}
                />
                <Text style={styles.explicitText}>No Explicit</Text>
            </View>
        </View>

    );
};


export default HomeComponent;