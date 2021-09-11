import { types } from "../types/types";

export const setError = ( msgError ) => ({
    type: types.uiSetError,
    payload: msgError
})


export const removeError = () => ({
    type: types.uiRemoveError
})