export enum jokeType {
    random = 'random',
    search = 'search'
}
export interface metadataInterface {
    firstName: string,
    lastName: string
}

export interface jokePayload {
    type: jokeType,
    isExplicit: boolean,
    metadata?: metadataInterface
}