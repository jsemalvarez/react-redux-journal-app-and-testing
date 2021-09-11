import { signInWithPopup, auth, googleAuthProvider } from "../firebase/firebase-config"
import { types } from "../types/types"

export const startLoginEmailPassword = ( email, password ) => {

    return( dispatch ) => {
        dispatch( login( 555, 'Jose' ) )
    }
}

export const startGoogleLogin = () => {
    return( dispatch ) => {

        signInWithPopup(auth, googleAuthProvider)
            .then( ({ user }) => {
                dispatch( login( user.uid, user.displayName))
            }) 
    }
}

export const login = ( uid, displayName ) => ({
        type: types.login,
        payload: { uid, displayName }
    })