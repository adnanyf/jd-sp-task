import axios from "axios";
import { metadataInterface } from "./jokePayload.interface";

const BASE_URL = 'http://api.icndb.com/jokes'


export const getJoke = (isExplicit: boolean) => {
    const url = `${BASE_URL}/random${isExplicit ? '?exclude=[explicit]' : ''}`
    return axios.get(url)
        .catch(err => console.log("Error", err))
}

export const nameJoke = (isExplicit: boolean, { firstName, lastName }: metadataInterface) => {
    const url = `${BASE_URL}/random?firstName=${firstName}&lastName=${lastName}${isExplicit ? '&exclude=[explicit]' : ''}`
    return axios.get(url)
        .catch(err => console.log("Error", err))
}

export const neverEndingJokes = (isExplicit: boolean, numberOfJokes: number) => {
    const url = `${BASE_URL}/random/${numberOfJokes}${isExplicit ? '?exclude=[explicit]' : ''}`

    return axios.get(url)
        .catch(err => console.log("Error", err))
}