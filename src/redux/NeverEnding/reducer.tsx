import {
    NEVER_ENDING_JOKES_START,
    NEVER_ENDING_JOKES_SUCCESS,
    NEVER_ENDING_JOKES_ERROR,
    NEVER_ENDING_JOKES_CLEAN,
} from "./actions";

const initialState = {
    isLoading: false,
    jokesList: [],

}

export const neverEndingReducer = (state = initialState, { type, payload, error }: any) => {

    switch (type) {
        case NEVER_ENDING_JOKES_START:
            return {
                ...state,
                isLoading: true,
            }

        case NEVER_ENDING_JOKES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                jokesList: [...state.jokesList, ...payload?.value],
            }
        }

        case NEVER_ENDING_JOKES_ERROR:
            return {
                ...state,
                isLoading: false,
                error
            }
        case NEVER_ENDING_JOKES_CLEAN:
            return {
                ...state,
                jokesList: []
            }
        default:
            return state;


    }
}