import React, { useEffect } from "react";
import { SafeAreaView, Text, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { NEVER_ENDING_JOKES, NEVER_ENDING_JOKES_CLEAN } from "../../redux/NeverEnding/actions";
import styles from "./style";
import InfiniteScroll from 'react-native-infinite-scrolling'

interface JokeListInterface {
    jokes: any[],
    isLoading: Boolean,
    neverEndingJokes: Function,
    cleanJokes: Function,
    route: {
        params: {
            isExplicit: boolean
        }
    }
}

const JokeListComponent = ({ jokes, isLoading, neverEndingJokes, cleanJokes, route }: JokeListInterface) => {
    const { isExplicit } = route.params
    useEffect(() => {
        getInitialJokes()
        return () => {
            cleanJokes()
        }
    }, [])
    const getInitialJokes = () => {
        neverEndingJokes({ isExplicit, numberOfJokes: 20 })
    }
    const getMoreJokes = () => {
        neverEndingJokes({ isExplicit, numberOfJokes: 4 })
    }

    const renderJoke = ({ item: { id, joke } }: { item: any }) => {
        return (
            <Text key={id} style={styles.jokesList} >{joke}</Text>
        )
    }


    return (
        <SafeAreaView>
            <InfiniteScroll
                renderData={renderJoke}
                data={jokes}
                loadMore={getMoreJokes}
            />
            {isLoading &&
                <ActivityIndicator size="large" />
            }
        </SafeAreaView>
    );
};



export const mapStateToProps = (state: any) => ({
    jokes: state.neverEnding.jokesList,
    isLoading: state.neverEnding.isLoading
})

export const mapDispatchToProps = (dispatch: any) => ({
    neverEndingJokes: (payload: any) => {
        dispatch({ type: NEVER_ENDING_JOKES, payload })
    },
    cleanJokes: () => {
        dispatch({ type: NEVER_ENDING_JOKES_CLEAN })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(JokeListComponent);
