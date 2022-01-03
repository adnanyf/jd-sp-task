import {
    RANDOM_JOKES_START,
    RANDOM_JOKES_SUCCESS,
    RANDOM_JOKES_ERROR
} from "./actions";

const initialState = {
    isLoading: false,
    joke: null,

}

export const chuckReducer = (state = initialState, { type, payload, error }: any) => {

    switch (type) {
        case RANDOM_JOKES_START:
            return {
                ...state,
                isLoading: true,
                joke: null
            }

        case RANDOM_JOKES_SUCCESS: {
            return {
                ...state,
                joke: payload?.value?.joke,
                isLoading: false
            }
        }

        case RANDOM_JOKES_ERROR:
            return {
                ...state,
                isLoading: false,
                error
            }



        default:
            return state;


    }
}