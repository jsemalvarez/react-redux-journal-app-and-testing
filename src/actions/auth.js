import { types } from "../types/types"

export const startLoginEmailPassword = ( email, password ) => {

    return( dispatch ) => {
        dispatch( login( 555, 'Jose' ) )
    }
}

export const login = ( uid, displayName ) => ({
        type: types.login,
        payload: { uid, displayName }
    })